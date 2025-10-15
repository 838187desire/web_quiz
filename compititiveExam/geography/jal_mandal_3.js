const questions = [
    {
        topHeading: "जलमंडल पर आधारित 50 MCQs part_3 (quiz_no.)"
    },
    {
        question: "हेलोकलाइन (Halocline) परत क्या है?",
        answers: shuffle([
            { text: "वह परत जहाँ घनत्व तेजी से बदलता है", correct: false },
            { text: "वह परत जहाँ लवणता गहराई के साथ तेजी से बदलती है", correct: true },
            { text: "वह परत जहाँ तापमान तेजी से बदलता है", correct: false },
            { text: "वह परत जहाँ ऑक्सीजन का स्तर सबसे अधिक होता है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हेलोकलाइन समुद्र में एक परत है जिसमें लवणता गहराई के साथ तेजी से बदलती है।"
    },
    {
        question: "मलक्का जलसंधि किन दो भूभागों को अलग करती है?",
        answers: shuffle([
            { text: "सुमात्रा द्वीप और मलय प्रायद्वीप", correct: true },
            { text: "जावा और सुमात्रा", correct: false },
            { text: "भारत और श्रीलंका", correct: false },
            { text: "बोर्नियो और सुलावेसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मलक्का जलसंधि हिंद महासागर को प्रशांत महासागर से जोड़ती है और यह इंडोनेशिया के सुमात्रा द्वीप को मलय प्रायद्वीप (मलेशिया) से अलग करती है।"
    },
    {
        question: "'हाइड्रोस्फीयर' शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "पृथ्वी का वायुमंडलीय आवरण", correct: false },
            { text: "पृथ्वी पर चट्टानों और खनिजों का क्षेत्र", correct: false },
            { text: "पृथ्वी पर जल का कुल योग", correct: true },
            { text: "पृथ्वी पर जीवन का क्षेत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोस्फीयर (जलमंडल) पृथ्वी की सतह पर, नीचे और ऊपर मौजूद सभी जल (महासागर, झीलें, नदियाँ, भूजल, बर्फ) का সম্মিলিত रूप है।"
    },
    {
        question: "मेरियाना गर्त की अनुमानित गहराई कितनी है?",
        answers: shuffle([
            { text: "लगभग 8,000 मीटर", correct: false },
            { text: "लगभग 9,000 मीटर", correct: false },
            { text: "लगभग 10,000 मीटर", correct: false },
            { text: "लगभग 11,000 मीटर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेरियाना गर्त का सबसे गहरा बिंदु, चैलेंजर डीप, लगभग 11,034 मीटर (लगभग 11 किलोमीटर) गहरा है।"
    },
    {
        question: "'आइसबर्ग' (हिमशैल) का कितना भाग पानी की सतह के नीचे रहता है?",
        answers: shuffle([
            { text: "लगभग 50%", correct: false },
            { text: "लगभग 70%", correct: false },
            { text: "लगभग 90%", correct: true },
            { text: "लगभग 30%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बर्फ का घनत्व पानी से थोड़ा कम होता है, इसलिए एक हिमशैल का लगभग 90% हिस्सा पानी के नीचे डूबा रहता है।"
    },
    {
        question: "भारत का सबसे ऊँचा जलप्रपात कौन सा है?",
        answers: shuffle([
            { text: "जोग जलप्रपात", correct: false },
            { text: "दूधसागर जलप्रपात", correct: false },
            { text: "कुंचिकल जलप्रपात", correct: true },
            { text: "शिवसमुद्रम जलप्रपात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक में वाराही नदी पर स्थित कुंचिकल जलप्रपात भारत का सबसे ऊँचा जलप्रपात माना जाता है।"
    },
    {
        question: "'सी ऑफ ट्रेंक्विलिटी' (शांति का सागर) कहाँ स्थित है?",
        answers: shuffle([
            { text: "अटलांटिक महासागर में", correct: false },
            { text: "मंगल ग्रह पर", correct: false },
            { text: "चंद्रमा पर", correct: true },
            { text: "प्रशांत महासागर में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सी ऑफ ट्रेंक्विलिटी वास्तव में एक सागर नहीं है, बल्कि चंद्रमा पर एक विशाल, अंधेरा बेसाल्टिक मैदान (लूनर मेयर) है।"
    },
    {
        question: "कौन सी नदी कर्क रेखा को दो बार काटती है?",
        answers: shuffle([
            { text: "नर्मदा नदी", correct: false },
            { text: "ताप्ती नदी", correct: false },
            { text: "माही नदी", correct: true },
            { text: "साबरमती नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भारत की माही नदी मध्य प्रदेश से निकलकर राजस्थान और गुजरात से बहती हुई कर्क रेखा को दो बार पार करती है।"
    },
    {
        question: "समुद्री जल के नीले रंग का क्या कारण है?",
        answers: shuffle([
            { text: "आकाश का परावर्तन", correct: false },
            { text: "जल में मौजूद शैवाल", correct: false },
            { text: "जल के अणुओं द्वारा सूर्य के प्रकाश का प्रकीर्णन", correct: true },
            { text: "जल में घुले लवण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पानी के अणु सूर्य के प्रकाश के स्पेक्ट्रम में से लाल रंग को अवशोषित कर लेते हैं और नीले रंग को प्रकीर्णित (scatter) करते हैं, जिससे समुद्र नीला दिखाई देता है।"
    },
    {
        question: "किस देश को 'नदियों का देश' कहा जाता है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: false },
            { text: "ब्राजील", correct: false },
            { text: "बांग्लादेश", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बांग्लादेश में 700 से अधिक नदियाँ बहती हैं, जो एक विशाल और जटिल नेटवर्क बनाती हैं, इसलिए इसे 'नदियों का देश' कहा जाता है।"
    },
    {
        question: "'हाइड्रोथर्मल वेंट' क्या हैं?",
        answers: shuffle([
            { text: "ठंडे पानी के झरने", correct: false },
            { text: "समुद्र तल पर दरारें जिनसे गर्म, खनिज युक्त पानी निकलता है", correct: true },
            { text: "मीठे पानी के भूमिगत स्रोत", correct: false },
            { text: "ज्वारीय पूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हाइड्रोथर्मल वेंट समुद्र तल पर स्थित fissure होते हैं जहाँ भूतापीय रूप से गर्म किया गया पानी बाहर निकलता है।"
    },
    {
        question: "विक्टोरिया जलप्रपात किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "नील नदी", correct: false },
            { text: "कांगो नदी", correct: false },
            { text: "नाइजर नदी", correct: false },
            { text: "ज़ाम्बेज़ी नदी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया जलप्रपात ज़ाम्बेज़ी नदी पर, ज़ाम्बिया और ज़िम्बाब्वे की सीमा पर स्थित है।"
    },
    {
        question: "'आर्टेशियन कुआँ' में पानी बाहर क्यों आता है?",
        answers: shuffle([
            { text: "मोटर पंप द्वारा", correct: false },
            { text: "वायुमंडलीय दबाव के कारण", correct: false },
            { text: "दो अपारगम्य परतों के बीच जल के दबाव के कारण", correct: true },
            { text: "वाष्पीकरण के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक जलभृत दो अभेद्य परतों के बीच सीमित होता है और दबाव में होता है, तो कुआँ खोदने पर पानी बिना पंप के सतह पर आ जाता है।"
    },
    {
        question: "'तलछटीकरण' (Sedimentation) की प्रक्रिया क्या है?",
        answers: shuffle([
            { text: "चट्टानों का टूटना", correct: false },
            { text: "पानी में कणों का जमना या बैठना", correct: true },
            { text: "पानी का भाप बनना", correct: false },
            { text: "बर्फ का पिघलना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तलछटीकरण वह प्रक्रिया है जिसमें पानी में निलंबित कण (जैसे रेत, मिट्टी) गुरुत्वाकर्षण के कारण नीचे बैठ जाते हैं।"
    },
    {
        question: "ओयाशियो धारा किस प्रकार की महासागरीय धारा है?",
        answers: shuffle([
            { text: "गर्म भूमध्यरेखीय धारा", correct: false },
            { text: "गर्म अटलांटिक धारा", correct: false },
            { text: "ठंडी प्रशांत धारा", correct: true },
            { text: "ठंडी हिंद महासागर धारा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओयाशियो एक ठंडी उप-आर्कटिक महासागरीय धारा है जो उत्तरी प्रशांत महासागर में दक्षिण की ओर बहती है।"
    },
    {
        question: "'डेड ज़ोन' (मृत क्षेत्र) महासागरों में वे क्षेत्र हैं जहाँ...",
        answers: shuffle([
            { text: "मछली पकड़ना प्रतिबंधित है", correct: false },
            { text: "ऑक्सीजन का स्तर बहुत कम है", correct: true },
            { text: "लवणता बहुत अधिक है", correct: false },
            { text: "तापमान शून्य से नीचे है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये हाइपोक्सिक (कम-ऑक्सीजन) क्षेत्र होते हैं जहाँ पोषक तत्वों के प्रदूषण के कारण शैवाल की अत्यधिक वृद्धि और उनके अपघटन से पानी में ऑक्सीजन खत्म हो जाती है, जिससे अधिकांश समुद्री जीवन समाप्त हो जाता है।"
    },
    {
        question: "विश्व की सबसे ऊँची नौगम्य झील कौन सी है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "बैकाल झील", correct: false },
            { text: "टिटिकाका झील", correct: true },
            { text: "विक्टोरिया झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पेरू और बोलीविया की सीमा पर स्थित टिटिकाका झील दुनिया की सबसे ऊँची झील है जिस पर बड़े जहाज चलाए जा सकते हैं।"
    },
    {
        question: "'जलसंभर प्रबंधन' (Watershed Management) का मुख्य उद्देश्य क्या है?",
        answers: shuffle([
            { text: "केवल बाढ़ नियंत्रण", correct: false },
            { text: "केवल सिंचाई प्रदान करना", correct: false },
            { text: "जल और भूमि संसाधनों का संरक्षण और विवेकपूर्ण उपयोग", correct: true },
            { text: "केवल जलविद्युत उत्पादन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जलसंभर प्रबंधन एक जलसंभर क्षेत्र में भूमि, जल और वनस्पति जैसे प्राकृतिक संसाधनों के प्रबंधन के लिए एक एकीकृत दृष्टिकोण है।"
    },
    {
        question: "'गल्फ स्ट्रीम' की उत्पत्ति कहाँ से होती है?",
        answers: shuffle([
            { text: "मेक्सिको की खाड़ी", correct: true },
            { text: "हडसन की खाड़ी", correct: false },
            { text: "बंगाल की खाड़ी", correct: false },
            { text: "गिनी की खाड़ी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गल्फ स्ट्रीम एक शक्तिशाली, गर्म अटलांटिक महासागरीय धारा है जो मेक्सिको की खाड़ी में उत्पन्न होती है।"
    },
    {
        question: "एशिया की सबसे लंबी नदी कौन सी है?",
        answers: shuffle([
            { text: "मेकांग", correct: false },
            { text: "पीली नदी (ह्वांग हो)", correct: false },
            { text: "यांग्त्ज़ी", correct: true },
            { text: "गंगा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीन में बहने वाली यांग्त्ज़ी नदी एशिया की सबसे लंबी और दुनिया की तीसरी सबसे लंबी नदी है।"
    },
    {
        question: "किस महासागर में सबसे अधिक ज्वालामुखी द्वीप पाए जाते हैं?",
        answers: shuffle([
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false },
            { text: "प्रशांत महासागर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रशांत महासागर 'रिंग ऑफ फायर' का घर है, जो तीव्र विवर्तनिक गतिविधि का क्षेत्र है, जिसके परिणामस्वरूप कई ज्वालामुखी द्वीप बनते हैं।"
    },
    {
        question: "'जलोढ़ पंख' (Alluvial Fan) का निर्माण कहाँ होता है?",
        answers: shuffle([
            { text: "नदी के मुहाने पर", correct: false },
            { text: "पर्वतों के तलहटी क्षेत्र में", correct: true },
            { text: "नदी के मध्य भाग में", correct: false },
            { text: "झील के किनारे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब एक तेज बहने वाली नदी पहाड़ से निकलकर समतल मैदान में प्रवेश करती है, तो उसकी गति अचानक कम हो जाती है और वह अपने साथ लाए मलबे को पंखे के आकार में जमा कर देती है।"
    },
    {
        question: "ताजे पानी का सबसे बड़ा भंडार कहाँ पाया जाता है?",
        answers: shuffle([
            { text: "भूमिगत जल", correct: false },
            { text: "झीलें और नदियाँ", correct: false },
            { text: "ध्रुवीय बर्फ और ग्लेशियर", correct: true },
            { text: "वायुमंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथ्वी का अधिकांश मीठा पानी (लगभग 68%) ध्रुवों पर बर्फ की चोटियों और ग्लेशियरों के रूप में जमा हुआ है।"
    },
    {
        question: "पाक जलडमरूमध्य किन दो देशों के बीच स्थित है?",
        answers: shuffle([
            { text: "भारत और पाकिस्तान", correct: false },
            { text: "भारत और बांग्लादेश", correct: false },
            { text: "भारत और श्रीलंका", correct: true },
            { text: "भारत और म्यांमार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाक जलडमरूमध्य भारत के तमिलनाडु राज्य और श्रीलंका के उत्तरी भाग के बीच स्थित एक जलसंधि है।"
    },
    {
        question: "जब नदी सीधे समुद्र में गिरती है और डेल्टा नहीं बनाती है, तो उस मुहाने को क्या कहते हैं?",
        answers: shuffle([
            { text: "लैगून", correct: false },
            { text: "ज्वारनदमुख (Estuary)", correct: true },
            { text: "खाड़ी (Bay)", correct: false },
            { text: "केप (Cape)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ज्वारनदमुख तब बनता है जब नदी का मुहाना चौड़ा और गहरा होता है और ज्वार के कारण समुद्र का पानी नदी के अंदर तक आ जाता है, जिससे तलछट जमा नहीं हो पाती।<br><br><i class='fa-solid fa-angles-right icon'></i> नर्मदा और ताप्ती नदियाँ ज्वारनदमुख बनाती हैं।"
    },
    {
        question: "'चक्रवात' में हवा की दिशा उत्तरी गोलार्ध में कैसी होती है?",
        answers: shuffle([
            { text: "दक्षिणावर्त (Clockwise)", correct: false },
            { text: "वामावर्त (Counter-clockwise)", correct: true },
            { text: "केंद्र से बाहर की ओर", correct: false },
            { text: "ऊपर से नीचे की ओर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोरिओलिस बल के कारण, उत्तरी गोलार्ध में चक्रवात (कम दबाव प्रणाली) में हवा वामावर्त दिशा में घूमती है।"
    },
    {
        question: "'तैरती हुई झील' के रूप में प्रसिद्ध लोकटक झील किस राज्य में है?",
        answers: shuffle([
            { text: "असम", correct: false },
            { text: "मेघालय", correct: false },
            { text: "मणिपुर", correct: true },
            { text: "मिजोरम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मणिपुर में स्थित लोकटक झील अपनी सतह पर तैरते हुए वनस्पति के द्वीपों (जिन्हें फुमडी कहा जाता है) के लिए प्रसिद्ध है।"
    },
    {
        question: "महासागरीय जल की सतह की गति का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "गुरुत्वाकर्षण", correct: false },
            { text: "घनत्व में अंतर", correct: false },
            { text: "प्रचलित पवनें", correct: true },
            { text: "पृथ्वी का घूर्णन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्र की सतह पर बहने वाली स्थायी पवनें (जैसे व्यापारिक पवनें) पानी को अपने साथ खींचती हैं, जिससे सतही धाराओं का निर्माण होता है।"
    },
    {
        question: "'अपवाह तंत्र' (Drainage System) शब्द का क्या तात्पर्य है?",
        answers: shuffle([
            { text: "किसी क्षेत्र की सिंचाई प्रणाली", correct: false },
            { text: "किसी क्षेत्र की नदी प्रणाली", correct: true },
            { text: "शहरी जल निकासी प्रणाली", correct: false },
            { text: "भूमिगत जल चैनल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपवाह तंत्र किसी क्षेत्र की नदियों और उनकी सहायक नदियों द्वारा जल निकासी की व्यवस्था को संदर्भित करता है।"
    },
    {
        question: "सुंडा गर्त, जिसे पहले जावा गर्त कहा जाता था, किस महासागर में स्थित है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "हिंद महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुंडा गर्त हिंद महासागर के पूर्वी भाग में स्थित एक गहरा महासागरीय गर्त है।"
    },
    {
        question: "'डेल्टा' का नामकरण किस नदी के डेल्टा के आधार पर किया गया था?",
        answers: shuffle([
            { text: "गंगा नदी", correct: false },
            { text: "अमेज़ॅन नदी", correct: false },
            { text: "नील नदी", correct: true },
            { text: "मिसिसिपी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यूनानी इतिहासकार हेरोडोटस ने नील नदी के त्रिकोणीय आकार के मुहाने को ग्रीक अक्षर 'डेल्टा' (Δ) का नाम दिया, जो बाद में सभी नदी मुहानों के लिए इस्तेमाल होने लगा।"
    },
    {
        question: "हिमस्खलन (Avalanche) क्या है?",
        answers: shuffle([
            { text: "चट्टानों का गिरना", correct: false },
            { text: "मिट्टी का खिसकना", correct: false },
            { text: "किसी पहाड़ या ढलान से तेजी से बर्फ का खिसकना", correct: true },
            { text: "ज्वालामुखी से लावा का बहना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिमस्खलन बर्फ के एक बड़े द्रव्यमान का अचानक ढलान से नीचे की ओर प्रवाह है।"
    },
    {
        question: "लाल सागर का लाल रंग किसके कारण होता है?",
        answers: shuffle([
            { text: "लाल मिट्टी के जमाव के कारण", correct: false },
            { text: "एक विशेष प्रकार के शैवाल (ट्राइकोडेस्मियम एरिथ्रियम) की उपस्थिति के कारण", correct: true },
            { text: "आसपास के रेगिस्तानों से उड़कर आई रेत के कारण", correct: false },
            { text: "पानी में लोहे की उच्च सांद्रता के कारण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस साइनोबैक्टीरिया की मौसमी प्रचुरता पानी को लाल-भूरा रंग देती है।"
    },
    {
        question: "'स्टैलेक्टाइट' और 'स्टैलेग्माइट' भू-आकृतियाँ कहाँ पाई जाती हैं?",
        answers: shuffle([
            { text: "ज्वालामुखी क्षेत्रों में", correct: false },
            { text: "रेगिस्तानों में", correct: false },
            { text: "चूना पत्थर की गुफाओं में", correct: true },
            { text: "हिमनद घाटियों में", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ये भूमिगत जल द्वारा चूना पत्थर के घुलने और फिर से जमा होने से बनी गुफाओं की छत (स्टैलेक्टाइट) और फर्श (स्टैलेग्माइट) पर बनने वाली आकृतियाँ हैं।"
    },
    {
        question: "उत्तरी सागर किस महासागर का हिस्सा है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "हिंद महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तरी सागर ग्रेट ब्रिटेन, स्कैंडिनेविया और मुख्य भूमि यूरोप के बीच स्थित अटलांटिक महासागर का एक सीमांत समुद्र है।"
    },
    {
        question: "अमेज़ॅन नदी का उद्गम स्थल कहाँ है?",
        answers: shuffle([
            { text: "रॉकी पर्वत", correct: false },
            { text: "आल्प्स पर्वत", correct: false },
            { text: "हिमालय पर्वत", correct: false },
            { text: "एंडीज पर्वत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमेज़ॅन नदी का स्रोत पेरू के एंडीज पर्वत में है।"
    },
    {
        question: "'लघु ज्वार' (Neap Tide) कब आता है?",
        answers: shuffle([
            { text: "जब सूर्य, पृथ्वी और चंद्रमा एक सीधी रेखा में हों", correct: false },
            { text: "जब सूर्य और चंद्रमा पृथ्वी के साथ समकोण बनाते हैं", correct: true },
            { text: "केवल अमावस्या के दिन", correct: false },
            { text: "केवल पूर्णिमा के दिन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> महीने के पहले और तीसरे चौथाई में, सूर्य और चंद्रमा के गुरुत्वाकर्षण बल एक दूसरे को निष्प्रभावी करते हैं, जिससे सामान्य से कम ऊँचे ज्वार आते हैं।"
    },
    {
        question: "विश्व का सबसे बड़ा नदी द्वीप, माजुली, किस नदी पर स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "ब्रह्मपुत्र", correct: true },
            { text: "यमुना", correct: false },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माजुली भारत के असम राज्य में ब्रह्मपुत्र नदी पर स्थित एक विशाल नदी द्वीप है।"
    },
    {
        question: "'एक्वीफर' (Aquifer) शब्द किससे संबंधित है?",
        answers: shuffle([
            { text: "सतही जल", correct: false },
            { text: "भूमिगत जल", correct: true },
            { text: "वर्षा जल", correct: false },
            { text: "समुद्री जल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक्वीफर (जलभृत) चट्टान या तलछट की एक भूमिगत परत है जो भूजल को संग्रहीत और पारित कर सकती है।"
    },
    {
        question: "'बैकवाटर' (पश्चजल) भारत के किस राज्य की एक विशिष्ट विशेषता है?",
        answers: shuffle([
            { text: "गुजरात", correct: false },
            { text: "केरल", correct: true },
            { text: "ओडिशा", correct: false },
            { text: "पश्चिम बंगाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> केरल अपने 'बैकवाटर' के लिए प्रसिद्ध है, जो झीलों, नहरों और लैगून का एक नेटवर्क है जो तट के समानांतर फैला हुआ है।"
    },
    {
        question: "कैरेबियन सागर किस महासागर का हिस्सा है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "हिंद महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: true },
            { text: "आर्कटिक महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैरेबियन सागर पश्चिमी गोलार्ध के उष्णकटिबंध में स्थित अटलांटिक महासागर का एक सीमांत समुद्र है।"
    },
    {
        question: "नदी के अपरदन (Erosion) से बनने वाली भू-आकृति कौन सी है?",
        answers: shuffle([
            { text: "डेल्टा", correct: false },
            { text: "बाढ़ का मैदान", correct: false },
            { text: "कैनियन (Canyon)", correct: true },
            { text: "जलोढ़ पंख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैनियन एक गहरी और संकरी घाटी है जिसे नदी द्वारा चट्टानों के लंबे समय तक अपरदन से बनाया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> डेल्टा, बाढ़ का मैदान और जलोढ़ पंख निक्षेपण से बनते हैं।"
    },
    {
        question: "दो नदियों के बीच की उपजाऊ भूमि को क्या कहते हैं?",
        answers: shuffle([
            { text: "पठार", correct: false },
            { text: "दोआब", correct: true },
            { text: "तराई", correct: false },
            { text: "घाटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दो' का अर्थ है दो और 'आब' का अर्थ है पानी।<br><br><i class='fa-solid fa-angles-right icon'></i> दोआब दो नदियों के संगम के बीच की भूमि की पट्टी है, जैसे गंगा-यमुना दोआब।"
    },
    {
        question: "'जल विभाजक' (Water Divide) क्या है?",
        answers: shuffle([
            { text: "दो नदियों का संगम", correct: false },
            { text: "एक झील जो दो नदियों को जोड़ती है", correct: false },
            { text: "एक उच्च भूमि जो दो अपवाह तंत्रों को अलग करती है", correct: true },
            { text: "एक नहर जो नदी के पानी को मोड़ती है", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कोई भी ऊँचा क्षेत्र, जैसे पर्वत या पठार, जो वर्षा जल को अलग-अलग दिशाओं में बहने वाली नदियों में विभाजित करता है, जल विभाजक कहलाता है।"
    },
    {
        question: "'वर्षा जल संचयन' का मुख्य लाभ क्या है?",
        answers: shuffle([
            { text: "बाढ़ को बढ़ावा देना", correct: false },
            { text: "मिट्टी के कटाव को बढ़ाना", correct: false },
            { text: "भूजल स्तर को रिचार्ज करना", correct: true },
            { text: "जल को प्रदूषित करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्षा जल संचयन करके उसे जमीन के नीचे संग्रहीत करने से घटते भूजल स्तर को फिर से भरने में मदद मिलती है।"
    },
    {
        question: "कौन सी धारा कैलिफ़ोर्निया के तट पर मौसम को प्रभावित करती है?",
        answers: shuffle([
            { text: "गल्फ स्ट्रीम (गर्म)", correct: false },
            { text: "कैलिफ़ोर्निया धारा (ठंडी)", correct: true },
            { text: "कुरोशियो धारा (गर्म)", correct: false },
            { text: "अलास्का धारा (गर्म)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैलिफ़ोर्निया धारा एक ठंडी प्रशांत महासागरीय धारा है जो दक्षिण की ओर बहती है, जिससे कैलिफ़ोर्निया के तटीय क्षेत्रों में मौसम ठंडा और शुष्क रहता है।"
    },
    {
        question: "हिमनद द्वारा छोड़े गए मलबे (चट्टान, रेत, मिट्टी) को क्या कहते हैं?",
        answers: shuffle([
            { text: "लोएस", correct: false },
            { text: "जलोढ़", correct: false },
            { text: "हिमोढ़ (Moraine)", correct: true },
            { text: "टिब्बा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हिमनद जब आगे बढ़ते हैं या पिघलते हैं, तो वे अपने साथ लाए गए चट्टानी मलबे को जमा कर देते हैं, जिसे हिमोढ़ कहा जाता है।"
    },
    {
        question: "निम्नलिखित में से कौन-सा एक भू-आबद्ध सागर (Landlocked Sea) है?",
        answers: shuffle([
            { text: "लाल सागर", correct: false },
            { text: "अरब सागर", correct: false },
            { text: "अरल सागर", correct: true },
            { text: "दक्षिण चीन सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरल सागर मध्य एशिया में स्थित एक अंतर्देशीय झील है जो पूरी तरह से भूमि से घिरी हुई है।"
    },
    {
        question: "समुद्र में लवणता का मुख्य स्रोत क्या है?",
        answers: shuffle([
            { text: "ज्वालामुखी विस्फोट", correct: false },
            { text: "नदियों द्वारा भूमि से लाए गए घुले हुए खनिज", correct: true },
            { text: "वायुमंडलीय निक्षेपण", correct: false },
            { text: "जैविक प्रक्रियाओं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नदियाँ जब चट्टानों और मिट्टी के ऊपर से बहती हैं, तो वे खनिजों और लवणों को घोल लेती हैं और उन्हें समुद्र में ले जाती हैं।"
    },
    {
        question: "'गीजर' (Geyser) क्या है?",
        answers: shuffle([
            { text: "एक ठंडा पानी का झरना", correct: false },
            { text: "एक गर्म पानी का झरना जो समय-समय पर पानी और भाप फेंकता है", correct: true },
            { text: "एक जमी हुई झील", correct: false },
            { text: "एक भूमिगत नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गीजर एक ऐसा गर्म सोता है जिसमें पानी भूतापीय ऊर्जा से गर्म होकर दबाव के कारण रुक-रुक कर फूटता है।"
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