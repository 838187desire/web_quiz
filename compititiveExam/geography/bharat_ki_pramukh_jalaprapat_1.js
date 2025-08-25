const questions = [ 
    {
        topHeading: "भारत के प्रमुख जलप्रपात पर आधारित बहुविकल्पीय प्रश्न part 1  (quiz_no. 93)."
    },
    {
        question: "भारत का सबसे ऊंचा जलप्रपात कौन सा है?",
        answers: shuffle([
            { text: "जोग जलप्रपात", correct: false },
            { text: "कुंचिकल जलप्रपात", correct: true },
            { text: "शिवसमुद्रम जलप्रपात", correct: false },
            { text: "धुआंधार जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंचिकल जलप्रपात कर्नाटक में वराही नदी पर स्थित है और यह 455 मीटर की ऊंचाई के साथ भारत का सबसे ऊंचा जलप्रपात है।"
    },
    {
        question: "'जोग जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "कावेरी", correct: false },
            { text: "शरावती", correct: true },
            { text: "नर्मदा", correct: false },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोग जलप्रपात कर्नाटक में शरावती नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे महात्मा गांधी जलप्रपात के नाम से भी जाना जाता है।"
    },
    {
        question: "'धुआंधार जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "ताप्ती", correct: false },
            { text: "महानदी", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "चंबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धुआंधार जलप्रपात मध्य प्रदेश के जबलपुर में नर्मदा नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ पानी 10 मीटर की ऊंचाई से गिरता है।"
    },
    {
        question: "'शिवसमुद्रम जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: true },
            { text: "गोदावरी", correct: false },
            { text: "पेरियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिवसमुद्रम जलप्रपात कर्नाटक में कावेरी नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह भारत की पहली जलविद्युत परियोजना (1902) का स्थल भी है।"
    },
    {
        question: "'हुंडरू जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "स्वर्णरेखा", correct: true },
            { text: "दामोदर", correct: false },
            { text: "कोसी", correct: false },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हुंडरू जलप्रपात झारखंड में स्वर्णरेखा नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी ऊंचाई लगभग 98 मीटर है।"
    },
    {
        question: "'चुलिया जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "चंबल", correct: true },
            { text: "ताप्ती", correct: false },
            { text: "माही", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुलिया जलप्रपात राजस्थान में चंबल नदी पर स्थित है।"
    },
    {
        question: "'कपिलधारा जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "ताप्ती", correct: false },
            { text: "नर्मदा", correct: true },
            { text: "साबरमती", correct: false },
            { text: "पेरियार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपिलधारा जलप्रपात मध्य प्रदेश के अमरकंटक में नर्मदा नदी पर स्थित है।"
    },
    {
        question: "'महात्मा गांधी जलप्रपात' के नाम से किसे जाना जाता है?",
        answers: shuffle([
            { text: "जोग जलप्रपात", correct: true },
            { text: "कुंचिकल जलप्रपात", correct: false },
            { text: "शिवसमुद्रम जलप्रपात", correct: false },
            { text: "दुधसागर जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोग जलप्रपात को 'महात्मा गांधी जलप्रपात' भी कहा जाता है।"
    },
    {
        question: "'मंदाकिनी जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "चंबल", correct: false },
            { text: "महानदी", correct: false },
            { text: "मंदाकिनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंदाकिनी जलप्रपात मध्य प्रदेश के चित्रकूट में मंदाकिनी नदी पर स्थित है।"
    },
    {
        question: "'बरकाना जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "सीता", correct: true },
            { text: "वराही", correct: false },
            { text: "शरावती", correct: false },
            { text: "कावेरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बरकाना जलप्रपात कर्नाटक में सीता नदी पर स्थित है।"
    },
    {
        question: "'लोध जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "झारखंड", correct: true },
            { text: "छत्तीसगढ़", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोध जलप्रपात, जिसे बूढ़ा घाघ जलप्रपात भी कहते हैं, झारखंड में बूढ़ा नदी पर स्थित है।"
    },
    {
        question: "'चित्रकूट जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "गोदावरी", correct: false },
            { text: "इंद्रावती", correct: true },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चित्रकूट जलप्रपात छत्तीसगढ़ में इंद्रावती नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे भारत का 'नियाग्रा जलप्रपात' कहा जाता है।"
    },
    {
        question: "'वसुधारा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "उत्तराखंड", correct: true },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वसुधारा जलप्रपात उत्तराखंड में अलकनंदा नदी के पास स्थित है।"
    },
    {
        question: "'पायकारा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "कर्नाटक", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "महाराष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पायकारा जलप्रपात तमिलनाडु के नीलगिरि जिले में पायकारा नदी पर स्थित है।"
    },
    {
        question: "'दूधसागर जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "मांडवी", correct: true },
            { text: "जुआरी", correct: false },
            { text: "पेरियार", correct: false },
            { text: "शरवती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दूधसागर जलप्रपात गोवा और कर्नाटक की सीमा पर मांडवी नदी पर स्थित है।"
    },
    {
        question: "'राजप्पा जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "दामोदर", correct: true },
            { text: "स्वर्णरेखा", correct: false },
            { text: "महानदी", correct: false },
            { text: "भैरवी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजप्पा जलप्रपात झारखंड में दामोदर नदी और भैरवी नदी के संगम पर स्थित है।"
    },
    {
        question: "'ककोलत जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "बिहार", correct: true },
            { text: "उत्तर प्रदेश", correct: false },
            { text: "झारखंड", correct: false },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ककोलत जलप्रपात बिहार के नवादा जिले में स्थित है।"
    },
    {
        question: "'महात्मा गांधी जलप्रपात' के नाम से किसे जाना जाता है?",
        answers: shuffle([
            { text: "जोग जलप्रपात", correct: true },
            { text: "कुंचिकल जलप्रपात", correct: false },
            { text: "शिवसमुद्रम जलप्रपात", correct: false },
            { text: "दुधसागर जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोग जलप्रपात को 'महात्मा गांधी जलप्रपात' भी कहा जाता है।"
    },
    {
        question: "'खंडधार जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "झारखंड", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खंडधार जलप्रपात ओडिशा के सुंदरगढ़ जिले में स्थित है।"
    },
    {
        question: "'नोह्संगिथियांग जलप्रपात' जिसे 'सेवन सिस्टर्स फॉल्स' भी कहते हैं, किस राज्य में है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: true },
            { text: "त्रिपुरा", correct: false },
            { text: "मिजोरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नोह्संगिथियांग जलप्रपात मेघालय में स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मेघालय के सबसे ऊंचे जलप्रपातों में से एक है।"
    },
    {
        question: "'चचाई जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "उत्तर प्रदेश", correct: false },
            { text: "बिहार", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चचाई जलप्रपात मध्य प्रदेश के रीवा जिले में बीहड़ नदी पर स्थित है।"
    },
    {
        question: "'मंदाकिनी जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नर्मदा", correct: false },
            { text: "चंबल", correct: false },
            { text: "महानदी", correct: false },
            { text: "मंदाकिनी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंदाकिनी जलप्रपात मध्य प्रदेश के चित्रकूट में मंदाकिनी नदी पर स्थित है।"
    },
    {
        question: "'एलीफेंटा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "मेघालय", correct: true },
            { text: "असम", correct: false },
            { text: "नागालैंड", correct: false },
            { text: "मणिपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलीफेंटा जलप्रपात मेघालय की राजधानी शिलांग के पास स्थित एक प्रसिद्ध जलप्रपात है।"
    },
    {
        question: "'धुआंधार जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धुआंधार जलप्रपात मध्य प्रदेश के जबलपुर में नर्मदा नदी पर स्थित है।"
    },
    {
        question: "'केम्प्टी जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "उत्तराखंड", correct: true },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "जम्मू और कश्मीर", correct: false },
            { text: "सिक्किम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केम्प्टी जलप्रपात उत्तराखंड के मसूरी के पास स्थित एक प्रसिद्ध पर्यटन स्थल है।"
    },
    {
        question: "'राजप्पा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "ओडिशा", correct: false },
            { text: "झारखंड", correct: true },
            { text: "पश्चिम बंगाल", correct: false },
            { text: "छत्तीसगढ़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> राजप्पा जलप्रपात झारखंड में दामोदर और भैरवी नदियों के संगम पर स्थित है।"
    },
    {
        question: "'बरिपानी जलप्रपात' किस राष्ट्रीय उद्यान में स्थित है?",
        answers: shuffle([
            { text: "कान्हा राष्ट्रीय उद्यान", correct: false },
            { text: "सिमलीपाल राष्ट्रीय उद्यान", correct: true },
            { text: "जिम कॉर्बेट राष्ट्रीय उद्यान", correct: false },
            { text: "रणथंभौर राष्ट्रीय उद्यान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बरिपानी जलप्रपात ओडिशा के मयूरभंज जिले में सिमलीपाल राष्ट्रीय उद्यान के भीतर बुधबलंगा नदी पर स्थित है।"
    },
    {
        question: "'नोह्संगिथियांग जलप्रपात' किस राज्य में स्थित है, जिसे 'सेवन सिस्टर्स फॉल्स' भी कहते हैं?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: true },
            { text: "त्रिपुरा", correct: false },
            { text: "मिजोरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नोह्संगिथियांग जलप्रपात मेघालय में मासिनराम के पास स्थित है और अपनी सात धाराओं के कारण इसे 'सेवन सिस्टर्स फॉल्स' कहा जाता है।"
    },
    {
        question: "'कुंचिकल जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "शरावती", correct: false },
            { text: "वराही", correct: true },
            { text: "कावेरी", correct: false },
            { text: "घाटप्रभा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुंचिकल जलप्रपात कर्नाटक में वराही नदी पर स्थित है और यह भारत का सबसे ऊँचा जलप्रपात है।"
    },
    {
        question: "'अथिरापिल्ली जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "पेरियार", correct: false },
            { text: "कावेरी", correct: false },
            { text: "चालाकुडी", correct: true },
            { text: "पंबा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अथिरापिल्ली जलप्रपात केरल में चालाकुडी नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे भारत का 'नियाग्रा जलप्रपात' भी कहा जाता है।"
    },
    {
        question: "'लोध जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "बूढ़ा नदी", correct: true },
            { text: "दामोदर नदी", correct: false },
            { text: "स्वर्णरेखा नदी", correct: false },
            { text: "कोयल नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोध जलप्रपात, जिसे बूढ़ा घाघ जलप्रपात भी कहते हैं, झारखंड में बूढ़ा नदी पर स्थित है।"
    },
    {
        question: "'केम्प्टी जलप्रपात' किस शहर के पास स्थित है?",
        answers: shuffle([
            { text: "नैनीताल", correct: false },
            { text: "मसूरी", correct: true },
            { text: "शिमला", correct: false },
            { text: "मनाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केम्प्टी जलप्रपात उत्तराखंड के मसूरी शहर के पास स्थित एक प्रसिद्ध पर्यटन स्थल है।"
    },
    {
        question: "'चचाई जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "बीहड़ नदी", correct: true },
            { text: "नर्मदा नदी", correct: false },
            { text: "सोन नदी", correct: false },
            { text: "टोंस नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चचाई जलप्रपात मध्य प्रदेश के रीवा जिले में बीहड़ नदी पर स्थित है।"
    },
    {
        question: "'दुधसागर जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "मांडवी नदी", correct: true },
            { text: "जुआरी नदी", correct: false },
            { text: "साल नदी", correct: false },
            { text: "पेरियार नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दुधसागर जलप्रपात गोवा और कर्नाटक की सीमा पर मांडवी नदी पर स्थित है।"
    },
    {
        question: "'चित्रकूट जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: true },
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चित्रकूट जलप्रपात छत्तीसगढ़ में इंद्रावती नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे भारत का 'नियाग्रा जलप्रपात' भी कहते हैं।"
    },
    {
        question: "'अंबोली घाट जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "महाराष्ट्र", correct: true },
            { text: "गोवा", correct: false },
            { text: "कर्नाटक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अंबोली घाट जलप्रपात महाराष्ट्र में सिंधुदुर्ग जिले में स्थित है।"
    },
    {
        question: "'पायकारा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "कर्नाटक", correct: false },
            { text: "केरल", correct: false },
            { text: "तमिलनाडु", correct: true },
            { text: "तेलंगाना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पायकारा जलप्रपात तमिलनाडु के नीलगिरि जिले में स्थित है।"
    },
    {
        question: "'एलीफेंटा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: true },
            { text: "नागालैंड", correct: false },
            { text: "मणिपुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलीफेंटा जलप्रपात मेघालय की राजधानी शिलांग के पास स्थित एक प्रसिद्ध जलप्रपात है।"
    },
    {
        question: "'शिवसमुद्रम जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गोदावरी", correct: false },
            { text: "कृष्णा", correct: false },
            { text: "कावेरी", correct: true },
            { text: "महानदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शिवसमुद्रम जलप्रपात कर्नाटक में कावेरी नदी पर स्थित है।"
    },
    {
        question: "'कपिलधारा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कपिलधारा जलप्रपात मध्य प्रदेश के अमरकंटक में नर्मदा नदी पर स्थित है।"
    },
    {
        question: "'खंडधार जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: true },
            { text: "छत्तीसगढ़", correct: false },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> खंडधार जलप्रपात ओडिशा के सुंदरगढ़ जिले में स्थित है।"
    },
    {
        question: "'जोग जलप्रपात' को अन्य किस नाम से जाना जाता है?",
        answers: shuffle([
            { text: "धुआंधार जलप्रपात", correct: false },
            { text: "महात्मा गांधी जलप्रपात", correct: true },
            { text: "शिवसमुद्रम जलप्रपात", correct: false },
            { text: "नियाग्रा जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जोग जलप्रपात को 'महात्मा गांधी जलप्रपात' भी कहा जाता है।"
    },
    {
        question: "'धुआंधार जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "महाराष्ट्र", correct: false },
            { text: "गुजरात", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "राजस्थान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धुआंधार जलप्रपात मध्य प्रदेश के जबलपुर में नर्मदा नदी पर स्थित है।"
    },
    {
        question: "'चुलिया जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "चंबल नदी", correct: true },
            { text: "साबरमती नदी", correct: false },
            { text: "माही नदी", correct: false },
            { text: "ताप्ती नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चुलिया जलप्रपात राजस्थान में चंबल नदी पर स्थित है।"
    },
    {
        question: "'गौतमधारा जलप्रपात' किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "स्वर्णरेखा", correct: false },
            { text: "राडू नदी", correct: true },
            { text: "दामोदर", correct: false },
            { text: "भेड़ा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गौतमधारा जलप्रपात, जिसे जोन्हा जलप्रपात भी कहते हैं, झारखंड में राडू नदी पर स्थित है।"
    },
    {
        question: "'मंदाकिनी जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "उत्तराखंड", correct: false },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "मध्य प्रदेश", correct: true },
            { text: "जम्मू और कश्मीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंदाकिनी जलप्रपात मध्य प्रदेश के चित्रकूट में स्थित है।"
    },
    {
        question: "'चित्रकूट जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: true },
            { text: "झारखंड", correct: false },
            { text: "ओडिशा", correct: false },
            { text: "मध्य प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चित्रकूट जलप्रपात छत्तीसगढ़ में इंद्रावती नदी पर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे भारत का 'नियाग्रा जलप्रपात' भी कहते हैं।"
    },
    {
        question: "'बरकाना जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "केरल", correct: false },
            { text: "कर्नाटक", correct: true },
            { text: "गोवा", correct: false },
            { text: "तमिलनाडु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बरकाना जलप्रपात कर्नाटक में सीता नदी पर स्थित है।"
    },
    {
        question: "'पल्ली जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "छत्तीसगढ़", correct: true },
            { text: "ओडिशा", correct: false },
            { text: "तेलंगाना", correct: false },
            { text: "आंध्र प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पल्ली जलप्रपात छत्तीसगढ़ के नारायणपुर जिले में स्थित है।"
    },
    {
        question: "'वसुधारा जलप्रपात' किस राज्य में स्थित है?",
        answers: shuffle([
            { text: "उत्तराखंड", correct: true },
            { text: "हिमाचल प्रदेश", correct: false },
            { text: "सिक्किम", correct: false },
            { text: "अरुणाचल प्रदेश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वसुधारा जलप्रपात उत्तराखंड के चमोली जिले में स्थित है।"
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