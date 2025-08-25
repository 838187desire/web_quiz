const questions = [
    {
        topHeading: "विश्व के प्रमुख पठारो पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 75)."
    },
    {
        question: "मेडागास्कर का पठार किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "एशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेडागास्कर का पठार मेडागास्कर द्वीप पर स्थित है, जो अफ्रीकी महाद्वीप का एक हिस्सा है।"
    },
    {
        question: "कोलंबिया का पठार किस नदी द्वारा बनाया गया है?",
        answers: shuffle([
            { text: "कोलंबिया नदी", correct: true },
            { text: "साँप नदी (Snake River)", correct: false },
            { text: "मिसौरी नदी", correct: false },
            { text: "कोलोराडो नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलंबिया पठार का निर्माण कोलंबिया नदी और उसकी सहायक नदियों द्वारा ज्वालामुखी लावा के कटाव और जमाव से हुआ है।"
    },
    {
        question: "ग्रीनलैंड का पठार किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: true },
            { text: "हिंद महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रीनलैंड एक द्वीप है जो आर्कटिक महासागर में स्थित है और इसका अधिकांश हिस्सा बर्फ से ढका एक पठार है।"
    },
    {
        question: "पेंटागोनिया का पठार किस प्रकार का पठार है?",
        answers: shuffle([
            { text: "पर्वतान्तरित पठार", correct: false },
            { text: "तटीय पठार", correct: false },
            { text: "ज्वालामुखी पठार", correct: false },
            { text: "महाद्वीपीय पठार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंटागोनिया का पठार एक महाद्वीपीय पठार है जो दक्षिण अमेरिका के दक्षिणी भाग में स्थित है।"
    },
    {
        question: "अफ्रीका में कालाहारी पठार किन देशों में फैला हुआ है?",
        answers: shuffle([
            { text: "बोत्सवाना, नामीबिया, दक्षिण अफ्रीका", correct: true },
            { text: "केन्या, तंजानिया, युगांडा", correct: false },
            { text: "नाइजीरिया, चाड, सूडान", correct: false },
            { text: "मिस्र, लीबिया, अल्जीरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालाहारी पठार अफ्रीका के दक्षिणी भाग में स्थित है और बोत्सवाना, नामीबिया और दक्षिण अफ्रीका जैसे देशों में फैला हुआ है।"
    },
    {
        question: "दक्कन के पठार का सबसे ऊँचा शिखर कौन सा है?",
        answers: shuffle([
            { text: "अनाईमुडी", correct: true },
            { text: "डोडाबेट्टा", correct: false },
            { text: "गुरु शिखर", correct: false },
            { text: "कलसुबाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनाईमुडी दक्कन के पठार का सबसे ऊँचा शिखर है और यह पश्चिमी घाट में स्थित है।"
    },
    {
        question: "ब्राजील के पठार को किस नाम से भी जाना जाता है?",
        answers: shuffle([
            { text: "ब्राजीलियन शील्ड", correct: true },
            { text: "अमेज़ॅन पठार", correct: false },
            { text: "मोंटाना पठार", correct: false },
            { text: "रियो ग्रांडे पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील का पठार, जो ब्राजील के अधिकांश हिस्से में फैला हुआ है, को ब्राजीलियन शील्ड के नाम से भी जाना जाता है।"
    },
    {
        question: "मध्य साइबेरिया का पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "रूस", correct: true },
            { text: "कजाकिस्तान", correct: false },
            { text: "मंगोलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य साइबेरिया का पठार रूस के साइबेरियाई क्षेत्र में स्थित है।"
    },
    {
        question: "अर्मेनिया का पठार किन दो पर्वतमालाओं के बीच स्थित है?",
        answers: shuffle([
            { text: "पोंटिक और टॉरस पर्वत", correct: true },
            { text: "कैस्पियन सागर और काला सागर", correct: false },
            { text: "काकेशस पर्वत और अलबुर्ज पर्वत", correct: false },
            { text: "काराकोरम और हिंदू कुश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अर्मेनिया का पठार पोंटिक और टॉरस पर्वत श्रृंखलाओं के बीच स्थित है।"
    },
    {
        question: "तस्मानिया का पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "न्यूजीलैंड", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "पापुआ न्यू गिनी", correct: false },
            { text: "इंडोनेशिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तस्मानिया का पठार तस्मानिया द्वीप पर स्थित है, जो ऑस्ट्रेलिया का एक राज्य है।"
    },
    {
        question: "किम्बरले पठार किस महासागर के तट पर स्थित है?",
        answers: shuffle([
            { text: "हिंद महासागर", correct: true },
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "दक्षिणी महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किम्बरले पठार ऑस्ट्रेलिया के पश्चिमी तट पर है, जो हिंद महासागर के किनारे स्थित है।"
    },
    {
        question: "पामीर के पठार से कौन सी पर्वत श्रृंखलाएँ नहीं निकलती हैं?",
        answers: shuffle([
            { text: "हिमालय", correct: false },
            { text: "हिंदू कुश", correct: false },
            { text: "एंडीज़", correct: true },
            { text: "कराकोरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एंडीज़ पर्वत श्रृंखला दक्षिण अमेरिका में स्थित है, जबकि पामीर का पठार एशिया में है और हिमालय, हिंदू कुश, कराकोरम जैसी पर्वत श्रृंखलाओं का मिलन बिंदु है।"
    },
    {
        question: "तिब्बत के पठार के बाद विश्व का दूसरा सबसे बड़ा पर्वतान्तरित पठार कौन सा है?",
        answers: shuffle([
            { text: "मेक्सिको का पठार", correct: false },
            { text: "अनाटोलिया का पठार", correct: false },
            { text: "बोलीविया का पठार", correct: true },
            { text: "ईरान का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बोलीविया का पठार, एंडीज़ पर्वतमाला के बीच स्थित है और यह विश्व का दूसरा सबसे बड़ा पर्वतान्तरित पठार है।"
    },
    {
        question: "किस पठार को \"पठारों का पठार\" भी कहा जाता है?",
        answers: shuffle([
            { text: "पामीर का पठार", correct: true },
            { text: "तिब्बत का पठार", correct: false },
            { text: "दक्कन का पठार", correct: false },
            { text: "ब्राजील का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पामीर का पठार कई पर्वत श्रृंखलाओं के मिलन बिंदु पर होने के कारण इसे \"पठारों का पठार\" भी कहा जाता है।"
    },
    {
        question: "चीन में स्थित यून्नान का पठार किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "टिन", correct: true },
            { text: "लौह अयस्क", correct: false },
            { text: "बॉक्साइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यून्नान का पठार चीन में टिन के महत्वपूर्ण भंडारों के लिए जाना जाता है।"
    },
    {
        question: "दक्कन के पठार का पूर्वी और पश्चिमी किनारा क्या कहलाता है?",
        answers: shuffle([
            { text: "पूर्वी घाट और पश्चिमी घाट", correct: true },
            { text: "हिमालय और विंध्य", correct: false },
            { text: "अरावली और सतपुड़ा", correct: false },
            { text: "राजमहल और नीलगिरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कन के पठार का पूर्वी किनारा पूर्वी घाट और पश्चिमी किनारा पश्चिमी घाट कहलाता है।"
    },
    {
        question: "इथियोपियाई पठार किस महाद्वीप में स्थित है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "यूरोप", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इथियोपियाई पठार (अबीसीनिया का पठार) अफ्रीका महाद्वीप में स्थित है।"
    },
    {
        question: "ऑस्ट्रेलिया के पठार किस प्रकार के खनिज के लिए प्रसिद्ध हैं?",
        answers: shuffle([
            { text: "सोने और हीरे", correct: true },
            { text: "कोयले और पेट्रोलियम", correct: false },
            { text: "बॉक्साइट और लौह अयस्क", correct: false },
            { text: "टिन और तांबा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऑस्ट्रेलिया के पठार, विशेषकर पश्चिमी पठार, सोने और हीरे के लिए प्रसिद्ध हैं।"
    },
    {
        question: "अलास्का में स्थित यूकोन का पठार किस नदी द्वारा कटा हुआ है?",
        answers: shuffle([
            { text: "मिसिसिपी नदी", correct: false },
            { text: "यूकोन नदी", correct: true },
            { text: "मैकेंजी नदी", correct: false },
            { text: "सेंट लॉरेंस नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकोन का पठार यूकोन नदी और उसकी सहायक नदियों द्वारा कटा हुआ है।"
    },
    {
        question: "मेसेटा का पठार किस देश के आंतरिक भाग को कवर करता है?",
        answers: shuffle([
            { text: "फ्रांस", correct: false },
            { text: "स्पेन", correct: true },
            { text: "इटली", correct: false },
            { text: "जर्मनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसेटा का पठार स्पेन के आंतरिक भाग का अधिकांश हिस्सा है।"
    },
    {
        question: "विश्व का सबसे बड़ा पर्वतान्तरित पठार कौन सा है, जो पूरी तरह से पर्वतमालाओं से घिरा हुआ है?",
        answers: shuffle([
            { text: "तिब्बत का पठार", correct: true },
            { text: "बोलीविया का पठार", correct: false },
            { text: "कोलोराडो का पठार", correct: false },
            { text: "दक्कन का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बत का पठार, जो हिमालय और कुनलुन जैसी पर्वतमालाओं से घिरा है, विश्व का सबसे बड़ा पर्वतान्तरित पठार है।"
    },
    {
        question: "अनाटोलिया के पठार पर कौन सा खनिज प्रचुर मात्रा में पाया जाता है?",
        answers: shuffle([
            { text: "तांबा", correct: false },
            { text: "बॉक्साइट", correct: false },
            { text: "कोयला", correct: false },
            { text: "क्रोमियम", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तुर्की का अनाटोलिया पठार क्रोमियम के महत्वपूर्ण भंडारों के लिए जाना जाता है।"
    },
    {
        question: "ब्राजील का पठार किस प्रकार के भूवैज्ञानिक संरचना का उदाहरण है?",
        answers: shuffle([
            { text: "शील्ड (Shield)", correct: true },
            { text: "ज्वालामुखी पठार", correct: false },
            { text: "पर्वतान्तरित पठार", correct: false },
            { text: "तटीय मैदान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ब्राजील का पठार एक शील्ड का उदाहरण है, जो एक प्राचीन और स्थिर भूवैज्ञानिक संरचना है।"
    },
    {
        question: "दक्कन के पठार का सबसे ऊँचा शिखर कौन सा है?",
        answers: shuffle([
            { text: "अनाईमुडी", correct: true },
            { text: "डोडाबेट्टा", correct: false },
            { text: "गुरु शिखर", correct: false },
            { text: "कलसुबाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अनाईमुडी दक्कन के पठार का सबसे ऊँचा शिखर है और यह पश्चिमी घाट में स्थित है।"
    },
    {
        question: "यूएसए में ओज़ार्क पठार किस नदी के बेसिन में स्थित है?",
        answers: shuffle([
            { text: "मिसिसिपी नदी", correct: false },
            { text: "मिसौरी नदी", correct: true },
            { text: "ओहियो नदी", correct: false },
            { text: "टेनेसी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओज़ार्क पठार मुख्य रूप से मिसौरी नदी के बेसिन में स्थित है, जो मिसिसिपी नदी की एक प्रमुख सहायक नदी है।"
    },
    {
        question: "मेसेटा के पठार के दक्षिणी किनारे पर कौन सी पर्वतमाला स्थित है?",
        answers: shuffle([
            { text: "सिएरा मोरेना", correct: true },
            { text: "पिरेनीज़", correct: false },
            { text: "सिएरा नेवादा", correct: false },
            { text: "कैंटेब्रियन पर्वत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसेटा पठार के दक्षिणी किनारे पर सिएरा मोरेना पर्वतमाला स्थित है।"
    },
    {
        question: "किम्बरले पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "न्यूजीलैंड", correct: false },
            { text: "इंडोनेशिया", correct: false },
            { text: "पापुआ न्यू गिनी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> किम्बरले पठार ऑस्ट्रेलिया के पश्चिमी क्षेत्र में स्थित है।"
    },
    {
        question: "दक्कन के पठार की प्रमुख फसल कौन सी है?",
        answers: shuffle([
            { text: "चावल", correct: false },
            { text: "गेहूँ", correct: false },
            { text: "कपास", correct: true },
            { text: "जूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कन के पठार की काली मिट्टी कपास की खेती के लिए बहुत उपजाऊ है।"
    },
    {
        question: "तिब्बत के पठार के कारण किस देश में ठंडी हवाएं नहीं पहुंच पातीं?",
        answers: shuffle([
            { text: "भारत", correct: true },
            { text: "बांग्लादेश", correct: false },
            { text: "पाकिस्तान", correct: false },
            { text: "नेपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तिब्बत का पठार हिमालय पर्वतमाला के साथ मिलकर मध्य एशिया से आने वाली ठंडी साइबेरियन हवाओं को भारत पहुंचने से रोकता है, जिससे भारत की जलवायु गर्म रहती है।"
    },
    {
        question: "पामीर के पठार की सबसे ऊँची चोटी कौन सी है?",
        answers: shuffle([
            { text: "माउंट एवरेस्ट", correct: false },
            { text: "चोगोरी", correct: false },
            { text: "मुजताग अटा", correct: false },
            { text: "गोरा कोम्यूनिज़मा (अब इस्माइल समानी चोटी)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पामीर के पठार की सबसे ऊँची चोटी इस्माइल समानी चोटी है, जिसे पहले गोरा कोम्यूनिज़मा के नाम से जाना जाता था।"
    },
    {
        question: "मेक्सिको के पठार का सबसे ऊँचा पर्वत कौन सा है?",
        answers: shuffle([
            { text: "ओरिजाबा", correct: true },
            { text: "पोपोकैटेपेटल", correct: false },
            { text: "इस्ताक्सिहुआत्ल", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिको डे ओरिजाबा, जिसे सिट्लाल्टेपेटल भी कहा जाता है, मेक्सिको का सबसे ऊँचा पर्वत है और यह मेक्सिको के पठार पर स्थित है।"
    },
    {
        question: "मेसेटा का पठार किस प्रायद्वीप में स्थित है?",
        answers: shuffle([
            { text: "इबेरियन प्रायद्वीप", correct: true },
            { text: "बाल्कन प्रायद्वीप", correct: false },
            { text: "इटालियन प्रायद्वीप", correct: false },
            { text: "स्कैंडिनेवियन प्रायद्वीप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसेटा का पठार इबेरियन प्रायद्वीप में स्थित है, जो स्पेन और पुर्तगाल से मिलकर बना है।"
    },
    {
        question: "मेक्सिको का पठार किन दो पर्वतमालाओं के बीच स्थित है?",
        answers: shuffle([
            { text: "सिएरा माद्रे ओरिएंटल और सिएरा माद्रे ऑक्सीडेंटल", correct: true },
            { text: "रॉकी और एंडीज", correct: false },
            { text: "हिमालय और कुनलुन", correct: false },
            { text: "एलबुर्ज और जैग्रोस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेक्सिको का पठार पूर्वी सिएरा माद्रे ओरिएंटल और पश्चिमी सिएरा माद्रे ऑक्सीडेंटल पर्वतमालाओं से घिरा हुआ है।"
    },
    {
        question: "दक्कन के पठार की प्रमुख फसल कौन सी है?",
        answers: shuffle([
            { text: "चावल", correct: false },
            { text: "गेहूँ", correct: false },
            { text: "कपास", correct: true },
            { text: "जूट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दक्कन के पठार की काली मिट्टी कपास की खेती के लिए बहुत उपजाऊ है।"
    },
    {
        question: "ओज़ार्क पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "अमेरिका", correct: true },
            { text: "कनाडा", correct: false },
            { text: "मेक्सिको", correct: false },
            { text: "ब्राजील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओज़ार्क पठार अमेरिका के मिसौरी, अरकंसास, ओक्लाहोमा और कैनसस राज्यों में स्थित है।"
    },
    {
        question: "मेडागास्कर के पठार का सबसे ऊँचा शिखर कौन सा है?",
        answers: shuffle([
            { text: "माउंट त्सियाफाजवोना", correct: false },
            { text: "माउंट मारोमोकोटरो", correct: true },
            { text: "माउंट अन्तरा", correct: false },
            { text: "माउंट पेरिटोल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माउंट मारोमोकोटरो मेडागास्कर का सबसे ऊँचा शिखर है, जो मेडागास्कर के पठार पर स्थित है।"
    },
    {
        question: "तिब्बत के पठार से निकलने वाली महत्वपूर्ण नदियों में से कौन सी नदी नहीं है?",
        answers: shuffle([
            { text: "मेकोंग", correct: false },
            { text: "यांग्त्ज़ी", correct: false },
            { text: "सिंधु", correct: false },
            { text: "वोल्गा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोल्गा नदी रूस से निकलती है, जबकि मेकोंग, यांग्त्ज़ी, और सिंधु जैसी कई प्रमुख नदियाँ तिब्बत के पठार से निकलती हैं।"
    },
    {
        question: "बोलीविया के पठार पर स्थित सबसे ऊँची चोटी कौन सी है?",
        answers: shuffle([
            { text: "सजामा", correct: true },
            { text: "मालिम्पानी", correct: false },
            { text: "चिम्बोरजो", correct: false },
            { text: "कोटापाक्सी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सजामा, बोलीविया के पठार पर स्थित सबसे ऊँची चोटी है।"
    },
    {
        question: "यूकोन के पठार का निर्माण किस भूवैज्ञानिक प्रक्रिया से हुआ है?",
        answers: shuffle([
            { text: "ज्वालामुखी गतिविधि", correct: false },
            { text: "हिमनदी का कटाव", correct: false },
            { text: "नदियों का कटाव", correct: false },
            { text: "भूगर्भीय उत्थान", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूकोन पठार का निर्माण टेक्टोनिक प्लेटों के टकराव और भूगर्भीय उत्थान से हुआ है।"
    },
    {
        question: "पोटवार का पठार किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "पेट्रोलियम और प्राकृतिक गैस", correct: true },
            { text: "सोने और चांदी", correct: false },
            { text: "कोयला", correct: false },
            { text: "लौह अयस्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पोटवार का पठार पाकिस्तान में पेट्रोलियम और प्राकृतिक गैस के भंडारों के लिए प्रसिद्ध है।"
    },
    {
        question: "ईरान का पठार किस प्रकार का पठार है?",
        answers: shuffle([
            { text: "पर्वतान्तरित पठार", correct: true },
            { text: "तटीय पठार", correct: false },
            { text: "ज्वालामुखी पठार", correct: false },
            { text: "महाद्वीपीय पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ईरान का पठार एलबुर्ज और जैग्रोस पर्वतमालाओं से घिरा होने के कारण एक पर्वतान्तरित पठार है।"
    },
    {
        question: "मेसेटा का पठार किस सागर के तट से दूर स्थित है?",
        answers: shuffle([
            { text: "भूमध्य सागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "काला सागर", correct: false },
            { text: "दोनों (a) और (b) से दूर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेसेटा का पठार इबेरियन प्रायद्वीप के आंतरिक भाग में स्थित है, इसलिए यह भूमध्य सागर और अटलांटिक महासागर दोनों के तट से दूर है।"
    },
    {
        question: "ब्राजील के पठार की सबसे ऊँची चोटी कौन सी है?",
        answers: shuffle([
            { text: "पिकू दा नेब्लीना", correct: true },
            { text: "पिकू दोस ओइरोस", correct: false },
            { text: "माउंट बेलो", correct: false },
            { text: "सिड्रा दा सोको", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिकू दा नेब्लीना ब्राजील की सबसे ऊँची चोटी है, जो ब्राजील के पठार के पास स्थित है।"
    },
    {
        question: "पामीर के पठार को किस देश में \"पठारों का जंक्शन\" भी कहा जाता है?",
        answers: shuffle([
            { text: "ताजिकिस्तान", correct: true },
            { text: "अफगानिस्तान", correct: false },
            { text: "चीन", correct: false },
            { text: "पाकिस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पामीर का पठार ताजिकिस्तान में स्थित है और इसे \"पठारों का जंक्शन\" भी कहा जाता है।"
    },
    {
        question: "चीन में स्थित यून्नान का पठार किस खनिज के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "कोयला", correct: false },
            { text: "टिन", correct: true },
            { text: "लौह अयस्क", correct: false },
            { text: "बॉक्साइट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यून्नान का पठार चीन में टिन के महत्वपूर्ण भंडारों के लिए जाना जाता है।"
    },
    {
        question: "दक्षिण अमेरिका में कौन सा पठार अर्जेंटीना में स्थित है?",
        answers: shuffle([
            { text: "ब्राजील का पठार", correct: false },
            { text: "बोलीविया का पठार", correct: false },
            { text: "पेंटागोनिया का पठार", correct: true },
            { text: "गुयाना का पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेंटागोनिया का पठार दक्षिणी अर्जेंटीना में स्थित है।"
    },
    {
        question: "दक्कन के पठार के पश्चिमी घाट की तुलना में पूर्वी घाट की ऊँचाई क्या है?",
        answers: shuffle([
            { text: "अधिक है", correct: false },
            { text: "कम है", correct: true },
            { text: "समान है", correct: false },
            { text: "बहुत अधिक है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पूर्वी घाट की औसत ऊँचाई पश्चिमी घाट की तुलना में कम है, क्योंकि यह अधिक कटा हुआ और खंडित है।"
    },
    {
        question: "यून्नान का पठार किस देश में स्थित है?",
        answers: shuffle([
            { text: "जापान", correct: false },
            { text: "चीन", correct: true },
            { text: "वियतनाम", correct: false },
            { text: "कोरिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यून्नान का पठार चीन के यून्नान प्रांत में स्थित है।"
    },
    {
        question: "कोलंबिया का पठार किस प्रकार का पठार है?",
        answers: shuffle([
            { text: "ज्वालामुखी पठार (लावा पठार)", correct: true },
            { text: "पर्वतान्तरित पठार", correct: false },
            { text: "तटीय पठार", correct: false },
            { text: "महाद्वीपीय पठार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोलंबिया पठार एक लावा पठार है जो प्राचीन ज्वालामुखी विस्फोटों से बना है।"
    },
    {
        question: "मेक्सिको के पठार का सबसे ऊँचा पर्वत कौन सा है?",
        answers: shuffle([
            { text: "ओरिजाबा", correct: true },
            { text: "पोपोकैटेपेटल", correct: false },
            { text: "इस्ताक्सिहुआत्ल", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पिको डे ओरिजाबा, जिसे सिट्लाल्टेपेटल भी कहा जाता है, मेक्सिको का सबसे ऊँचा पर्वत है और यह मेक्सिको के पठार पर स्थित है।"
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