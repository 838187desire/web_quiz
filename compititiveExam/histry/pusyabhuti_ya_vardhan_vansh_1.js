const questions = [
    {
        topHeading: "ष्यभूति वंश या वर्धन वंश पर आधारित बहुविकल्पी प्रश्न part 1 (quiz_no.85)"
    },
    {
        question: "पुष्यभूति वंश का संस्थापक कौन था?",
        answers: shuffle([
            { text: "प्रभाकरवर्धन", correct: false },
            { text: "हर्षवर्धन", correct: false },
            { text: "पुष्यभूति", correct: true },
            { text: "राज्यवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यभूति ने 6वीं शताब्दी ईस्वी में थानेश्वर में पुष्यभूति वंश की स्थापना की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> हालाँकि, इस वंश का वास्तविक विस्तार प्रभाकरवर्धन के शासनकाल में हुआ।"
    },
    {
        question: "किस शासक को 'परमभट्टारक महाराजाधिराज' की उपाधि मिली थी?",
        answers: shuffle([
            { text: "पुष्यभूति", correct: false },
            { text: "प्रभाकरवर्धन", correct: true },
            { text: "हर्षवर्धन", correct: false },
            { text: "राज्यवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रभाकरवर्धन इस वंश का पहला शासक था जिसने अपनी शक्ति और प्रभाव में वृद्धि की।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने 'परमभट्टारक महाराजाधिराज' जैसी भव्य उपाधियाँ धारण की थीं।"
    },
    {
        question: "हर्षवर्धन ने अपनी राजधानी थानेश्वर से कहाँ स्थानांतरित की थी?",
        answers: shuffle([
            { text: "पाटलिपुत्र", correct: false },
            { text: "कन्नौज", correct: true },
            { text: "उज्जैन", correct: false },
            { text: "प्रयाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने अपनी बहन राज्यश्री को मुक्त कराने और कन्नौज के सिंहासन पर बैठने के बाद अपनी राजधानी थानेश्वर से कन्नौज स्थानांतरित कर दी थी।"
    },
    {
        question: "चीनी यात्री ह्वेन त्सांग किसके शासनकाल में भारत आया था?",
        answers: shuffle([
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "प्रभाकरवर्धन", correct: false },
            { text: "हर्षवर्धन", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग लगभग 629-645 ईस्वी के बीच हर्षवर्धन के शासनकाल में भारत आया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपने यात्रा वृत्तांत 'सी-यू-की' में तत्कालीन भारत का विस्तृत वर्णन किया है।"
    },
    {
        question: "हर्षवर्धन के दरबारी कवि कौन थे, जिन्होंने 'हर्षचरित' और 'कादंबरी' की रचना की?",
        answers: shuffle([
            { text: "भवभूति", correct: false },
            { text: "दंडी", correct: false },
            { text: "बाणभट्ट", correct: true },
            { text: "आर्यभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट हर्षवर्धन के दरबारी कवि थे।<br><br><i class='fa-solid fa-angles-right icon'></i> उन्होंने 'हर्षचरित' नामक जीवनी में हर्षवर्धन के जीवन का वर्णन किया और 'कादंबरी' नामक उपन्यास भी लिखा।"
    },
    {
        question: "हर्षवर्धन की बहन का क्या नाम था?",
        answers: shuffle([
            { text: "ध्रुवस्वामिनी", correct: false },
            { text: "राज्यश्री", correct: true },
            { text: "प्रियदर्शिका", correct: false },
            { text: "यशोमती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की बहन राज्यश्री का विवाह कन्नौज के मौखरी शासक ग्रहवर्मन से हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> उनके पति की मृत्यु के बाद, वह हर्षवर्धन के संरक्षण में रही।"
    },
    {
        question: "किस चालुक्य शासक ने हर्षवर्धन को नर्मदा नदी के तट पर पराजित किया था?",
        answers: shuffle([
            { text: "विक्रमादित्य I", correct: false },
            { text: "पुलकेशिन I", correct: false },
            { text: "पुलकेशिन II", correct: true },
            { text: "कीर्तिवर्मन I", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन II ने 618 ईस्वी में हर्षवर्धन को नर्मदा नदी के तट पर पराजित किया था, जिससे हर्षवर्धन का दक्षिण की ओर विस्तार रुक गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस विजय का उल्लेख ऐहोल अभिलेख में मिलता है।"
    },
    {
        question: "'नागानंद', 'रत्नावली' और 'प्रियदर्शिका' नामक नाटकों के रचयिता कौन हैं?",
        answers: shuffle([
            { text: "बाणभट्ट", correct: false },
            { text: "हर्षवर्धन", correct: true },
            { text: "मयूर", correct: false },
            { text: "ह्वेन त्सांग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि बाणभट्ट जैसे कवियों ने हर्षवर्धन के शासनकाल में रचनाएँ कीं, लेकिन हर्षवर्धन स्वयं एक कुशल लेखक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने 'नागानंद', 'रत्नावली' और 'प्रियदर्शिका' नामक तीन संस्कृत नाटकों की रचना की थी।"
    },
    {
        question: "हर्षवर्धन किस धार्मिक संप्रदाय का अनुयायी था?",
        answers: shuffle([
            { text: "शैव धर्म", correct: false },
            { text: "बौद्ध धर्म", correct: false },
            { text: "जैन धर्म", correct: false },
            { text: "पहले शैव, फिर बौद्ध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के शुरुआती जीवन में वह शिव का उपासक था, लेकिन बाद में चीनी यात्री ह्वेन त्सांग के प्रभाव में आकर उसने महायान बौद्ध धर्म को अपनाया और उसका संरक्षण किया।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में कौन सा बौद्ध सम्मेलन आयोजित किया गया था?",
        answers: shuffle([
            { text: "प्रथम बौद्ध संगीति", correct: false },
            { text: "द्वितीय बौद्ध संगीति", correct: false },
            { text: "पंचम बौद्ध संगीति (कन्नौज सभा)", correct: true },
            { text: "चतुर्थ बौद्ध संगीति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने 643 ईस्वी में कन्नौज में एक विशाल धार्मिक सम्मेलन आयोजित किया था, जिसे इतिहास में पंचम बौद्ध संगीति के नाम से जाना जाता है।"
    },
    {
        question: "'हर्षचरित' में हर्षवर्धन के किस भाई का उल्लेख है?",
        answers: shuffle([
            { text: "राज्यवर्धन", correct: true },
            { text: "प्रभाकरवर्धन", correct: false },
            { text: "यशोवर्धन", correct: false },
            { text: "ये सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर्षचरित' में बाणभट्ट ने हर्षवर्धन के बड़े भाई राज्यवर्धन के बारे में लिखा है, जो प्रभाकरवर्धन की मृत्यु के बाद शासक बना था।"
    },
    {
        question: "हर्षवर्धन की मृत्यु किस वर्ष हुई थी?",
        answers: shuffle([
            { text: "647 ईस्वी", correct: true },
            { text: "643 ईस्वी", correct: false },
            { text: "618 ईस्वी", correct: false },
            { text: "606 ईस्वी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की मृत्यु 647 ईस्वी में हुई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसकी मृत्यु के बाद उत्तर भारत में केंद्रीय सत्ता का अंत हो गया और छोटे-छोटे राज्यों का उदय हुआ।"
    },
    {
        question: "वर्धन वंश के शासकों की प्रारंभिक राजधानी क्या थी?",
        answers: shuffle([
            { text: "कन्नौज", correct: false },
            { text: "थानेश्वर", correct: true },
            { text: "उज्जैन", correct: false },
            { text: "प्रयाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुष्यभूति वंश, जिसे वर्धन वंश भी कहते हैं, की शुरुआती राजधानी थानेश्वर (आधुनिक हरियाणा) थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में भू-राजस्व की दर क्या थी?",
        answers: shuffle([
            { text: "1/4", correct: false },
            { text: "1/6", correct: true },
            { text: "1/8", correct: false },
            { text: "1/10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग के अनुसार, हर्षवर्धन के शासनकाल में भू-राजस्व की दर कुल उपज का 1/6 हिस्सा होती थी।"
    },
    {
        question: "किस स्थान पर हर्षवर्धन प्रत्येक पाँच वर्ष में एक धार्मिक सभा आयोजित करता था, जिसे 'महामोक्ष परिषद' कहा जाता था?",
        answers: shuffle([
            { text: "थानेश्वर", correct: false },
            { text: "कन्नौज", correct: false },
            { text: "प्रयाग", correct: true },
            { text: "पाटलिपुत्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन प्रयाग (इलाहाबाद) में प्रत्येक पाँच वर्ष में एक धार्मिक सभा आयोजित करता था, जिसे 'महामोक्ष परिषद' के नाम से जाना जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग भी इस सभा में शामिल हुआ था।"
    },
    {
        question: "'हर्षचरित' किस भाषा में लिखी गई थी?",
        answers: shuffle([
            { text: "प्राकृत", correct: false },
            { text: "पाली", correct: false },
            { text: "संस्कृत", correct: true },
            { text: "हिंदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बाणभट्ट ने 'हर्षचरित' और 'कादंबरी' दोनों की रचना संस्कृत भाषा में की थी।"
    },
    {
        question: "हर्षवर्धन को किस शासक ने पराजित किया, जिसका उल्लेख चालुक्य शासक पुलकेशिन II के ऐहोल अभिलेख में मिलता है?",
        answers: shuffle([
            { text: "पुलकेशिन I", correct: false },
            { text: "मंगलेश", correct: false },
            { text: "विक्रमादित्य I", correct: false },
            { text: "पुलकेशिन II", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐहोल अभिलेख में स्पष्ट रूप से उल्लेख है कि चालुक्य शासक पुलकेशिन II ने हर्षवर्धन को नर्मदा नदी के तट पर हराया था।"
    },
    {
        question: "पुष्यभूति वंश का प्रथम स्वतंत्र शासक कौन था?",
        answers: shuffle([
            { text: "प्रभाकरवर्धन", correct: true },
            { text: "पुष्यभूति", correct: false },
            { text: "राज्यवर्धन", correct: false },
            { text: "हर्षवर्धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रभाकरवर्धन ने पुष्यभूति वंश को एक शक्तिशाली राज्य में बदला और 'परमभट्टारक' जैसी उपाधियाँ धारण कर अपनी स्वतंत्रता की घोषणा की।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में प्रशासन की सबसे छोटी इकाई क्या थी?",
        answers: shuffle([
            { text: "भुक्ति", correct: false },
            { text: "विषय", correct: false },
            { text: "ग्राम", correct: true },
            { text: "मंडल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल की तरह, हर्षवर्धन के शासनकाल में भी प्रशासन की सबसे छोटी इकाई ग्राम (गाँव) थी।"
    },
    {
        question: "ह्वेन त्सांग ने अपनी यात्रा के दौरान किस विश्वविद्यालय में अध्ययन किया था?",
        answers: shuffle([
            { text: "तक्षशिला", correct: false },
            { text: "नालंदा", correct: true },
            { text: "विक्रमशिला", correct: false },
            { text: "वल्लभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपनी यात्रा के दौरान नालंदा विश्वविद्यालय में लगभग 18 महीनों तक अध्ययन किया था और वहाँ के आचार्य शीलभद्र से शिक्षा ली थी।"
    },
    {
        question: "हर्षवर्धन की माता का क्या नाम था?",
        answers: shuffle([
            { text: "यशोमती", correct: true },
            { text: "ध्रुवस्वामिनी", correct: false },
            { text: "प्रियदर्शिका", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के पिता का नाम प्रभाकरवर्धन और माता का नाम यशोमती था।"
    },
    {
        question: "हर्षवर्धन ने किस शासक को पराजित कर कन्नौज पर अधिकार किया था?",
        answers: shuffle([
            { text: "शशांक", correct: false },
            { text: "प्रभाकरवर्धन", correct: false },
            { text: "देवगुप्त", correct: true },
            { text: "पुलकेशिन II", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा के शासक देवगुप्त ने कन्नौज के शासक ग्रहवर्मन (राज्यश्री के पति) की हत्या कर दी थी।<br><br><i class='fa-solid fa-angles-right icon'></i> राज्यवर्धन ने देवगुप्त को हराया, लेकिन खुद शशांक द्वारा मारा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद हर्षवर्धन ने देवगुप्त को हराकर कन्नौज पर अधिकार कर लिया।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में कौन सा कर व्यापारियों पर लगाया जाता था?",
        answers: shuffle([
            { text: "भाग", correct: false },
            { text: "हिरण्य", correct: true },
            { text: "बलि", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिरण्य' गुप्त काल और वर्धन काल में एक प्रकार का कर था, जो नकद रूप में लिया जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह व्यापारियों और अन्य आय पर लगाया जाता था।"
    },
    {
        question: "हर्षवर्धन के साम्राज्य के पतन का प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "विदेशी आक्रमण", correct: false },
            { text: "पुलकेशिन II से हार", correct: false },
            { text: "उसकी मृत्यु के बाद कोई योग्य उत्तराधिकारी न होना", correct: true },
            { text: "धार्मिक मतभेद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की मृत्यु 647 ईस्वी में बिना किसी उत्तराधिकारी के हुई थी, जिससे उसका विशाल साम्राज्य छोटे-छोटे राज्यों में बिखर गया।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में, 'पुलकेशिन द्वितीय' किस वंश का शासक था?",
        answers: shuffle([
            { text: "गुप्त वंश", correct: false },
            { text: "पल्लव वंश", correct: false },
            { text: "चालुक्य वंश", correct: true },
            { text: "वर्धन वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पुलकेशिन द्वितीय वातापी के चालुक्य वंश का एक महान शासक था, जिसने हर्षवर्धन को पराजित किया था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'अश्व' (सेना) का सर्वोच्च अधिकारी कौन होता था?",
        answers: shuffle([
            { text: "महासंधिविग्रहिक", correct: false },
            { text: "सिंहनाद", correct: false },
            { text: "कुंतल", correct: true },
            { text: "अवंति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के प्रशासन में, 'कुंतल' अश्वसेना का प्रमुख या सर्वोच्च अधिकारी होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> 'सिंहनाद' मुख्य सेनापति था, जबकि 'अवंति' युद्ध और शांति का मंत्री होता था।"
    },
    {
        question: "ह्वेन त्सांग के अनुसार, हर्षवर्धन के शासनकाल में करों की मुख्य दर क्या थी?",
        answers: shuffle([
            { text: "1/4 से 1/6", correct: true },
            { text: "1/2", correct: false },
            { text: "1/6 से 1/10", correct: false },
            { text: "1/8", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने लिखा है कि हर्षवर्धन के शासनकाल में किसानों को अपनी उपज का 1/6 भाग भूमि कर के रूप में देना होता था, जबकि अन्य करों को मिलाकर यह दर 1/4 तक भी हो सकती थी।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'अवंति' नामक अधिकारी किस पद पर था?",
        answers: shuffle([
            { text: "सेनापति", correct: false },
            { text: "न्यायमंत्री", correct: false },
            { text: "युद्ध और शांति का मंत्री", correct: true },
            { text: "वित्त मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवंति' हर्षवर्धन के प्रशासन में युद्ध और शांति से संबंधित मामलों का मंत्री होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक महत्वपूर्ण प्रशासनिक पद था।"
    },
    {
        question: "हर्षवर्धन की बहन राज्यश्री का विवाह किस मौखरी शासक से हुआ था?",
        answers: shuffle([
            { text: "ग्रहवर्मन", correct: true },
            { text: "ईशानवर्मन", correct: false },
            { text: "सर्ववर्मन", correct: false },
            { text: "आदित्यवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की बहन राज्यश्री का विवाह कन्नौज के मौखरी शासक ग्रहवर्मन से हुआ था।<br><br><i class='fa-solid fa-angles-right icon'></i> ग्रहवर्मन की हत्या मालवा के शासक देवगुप्त ने कर दी थी।"
    },
    {
        question: "ह्वेन त्सांग ने अपनी यात्रा वृत्तांत में भारत को किस नाम से संबोधित किया था?",
        answers: shuffle([
            { text: "भारतवर्ष", correct: false },
            { text: "जम्बूद्वीप", correct: false },
            { text: "यिन-तू (Yin-tu)", correct: true },
            { text: "हिंदुस्तान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री ह्वेन त्सांग ने अपने यात्रा वृत्तांत 'सी-यू-की' में भारत के लिए 'यिन-तू' शब्द का प्रयोग किया था।"
    },
    {
        question: "किस चीनी यात्री ने ह्वेन त्सांग के बाद भारत की यात्रा की और उसके बारे में लिखा?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "इत्सिंग", correct: true },
            { text: "सुंग युन", correct: false },
            { text: "शुआंग हुआंग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री इत्सिंग 7वीं शताब्दी के अंत में भारत आया था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अपने वृत्तांत में नालंदा विश्वविद्यालय और ह्वेन त्सांग के बारे में महत्वपूर्ण जानकारी दी है।"
    },
    {
        question: "बाणभट्ट द्वारा रचित 'कादंबरी' किस प्रकार की रचना है?",
        answers: shuffle([
            { text: "जीवनी", correct: false },
            { text: "ऐतिहासिक नाटक", correct: false },
            { text: "उपन्यास (गद्य काव्य)", correct: true },
            { text: "धार्मिक ग्रंथ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कादंबरी' बाणभट्ट द्वारा रचित एक संस्कृत उपन्यास (गद्य काव्य) है, जिसे विश्व साहित्य की एक उत्कृष्ट कृति माना जाता है।"
    },
    {
        question: "हर्षवर्धन की मृत्यु के बाद कन्नौज पर किस शासक ने अधिकार कर लिया था?",
        answers: shuffle([
            { text: "पुष्यभूति", correct: false },
            { text: "यशोवर्मन", correct: true },
            { text: "देवगुप्त", correct: false },
            { text: "भास्करवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन की मृत्यु के बाद, कन्नौज में केंद्रीय सत्ता समाप्त हो गई और कुछ समय बाद वहाँ यशोवर्मन नामक एक शासक का उदय हुआ।"
    },
    {
        question: "किस चीनी यात्री ने कन्नौज में आयोजित 'धर्मसभा' में भाग लिया था?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेन त्सांग", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "सुंग युन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग हर्षवर्धन द्वारा 643 ईस्वी में कन्नौज में आयोजित धर्मसभा में उपस्थित था, जिसे पंचम बौद्ध संगीति भी कहा जाता है।"
    },
    {
        question: "हर्षवर्धन के साम्राज्य में 'भुक्ति' क्या थी?",
        answers: shuffle([
            { text: "गाँव", correct: false },
            { text: "जिला", correct: false },
            { text: "प्रांत", correct: true },
            { text: "राजधानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल की तरह, हर्षवर्धन के प्रशासन में भी राज्य को 'भुक्ति' नामक प्रांतों में विभाजित किया गया था।"
    },
    {
        question: "पुलकेशिन II के ऐहोल अभिलेख में हर्षवर्धन के लिए किस उपाधि का प्रयोग किया गया है?",
        answers: shuffle([
            { text: "महाराजाधिराज", correct: false },
            { text: "परमेश्वर", correct: false },
            { text: "दक्षिणापथेश्वर", correct: false },
            { text: "सकलोत्तरापथनाथ", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐहोल अभिलेख में पुलकेशिन II ने खुद को 'दक्षिणापथेश्वर' और हर्षवर्धन को 'सकलोत्तरापथनाथ' (समस्त उत्तर भारत का स्वामी) कहा है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में बौद्ध धर्म की किस शाखा का प्रभाव सबसे अधिक था?",
        answers: shuffle([
            { text: "हीनयान", correct: false },
            { text: "महायान", correct: true },
            { text: "वज्रयान", correct: false },
            { text: "थेरवाद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने चीनी यात्री ह्वेन त्सांग के प्रभाव में आकर महायान बौद्ध धर्म को अपनाया और उसका संरक्षण किया।"
    },
    {
        question: "'महानवमी' उत्सव का वर्णन किस चीनी यात्री ने किया है?",
        answers: shuffle([
            { text: "फाह्यान", correct: false },
            { text: "ह्वेन त्सांग", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "सुंग युन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि फाह्यान ने महानवमी जैसे उत्सवों का उल्लेख किया था, ह्वेन त्सांग ने भी कन्नौज और प्रयाग में आयोजित सभाओं का विस्तृत वर्णन किया है।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'नालंदा' विश्वविद्यालय का कुलपति कौन था?",
        answers: shuffle([
            { text: "नागार्जुन", correct: false },
            { text: "वसुबंधु", correct: false },
            { text: "शीलभद्र", correct: true },
            { text: "धर्मपाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग जब नालंदा विश्वविद्यालय में पढ़ने आया था, तब वहाँ के कुलपति आचार्य शीलभद्र थे।"
    },
    {
        question: "हर्षवर्धन के भाई राज्यवर्धन की हत्या किसने की थी?",
        answers: shuffle([
            { text: "देवगुप्त", correct: false },
            { text: "पुलकेशिन II", correct: false },
            { text: "शशांक", correct: true },
            { text: "भास्करवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मालवा के शासक देवगुप्त ने कन्नौज के ग्रहवर्मन को मारा।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके बाद राज्यवर्धन ने देवगुप्त को पराजित किया, लेकिन गौड़ शासक शशांक ने धोखे से राज्यवर्धन की हत्या कर दी।"
    },
    {
        question: "हर्षवर्धन के साम्राज्य का विस्तार किस क्षेत्र तक नहीं था?",
        answers: shuffle([
            { text: "बंगाल", correct: false },
            { text: "पंजाब", correct: false },
            { text: "कश्मीर", correct: true },
            { text: "गुजरात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने एक विशाल साम्राज्य स्थापित किया था, जो पंजाब से बंगाल और हिमालय से नर्मदा तक फैला था।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन उसका कश्मीर पर अधिकार नहीं था।"
    },
    {
        question: "ह्वेन त्सांग ने अपनी यात्रा के दौरान किस जगह को 'मोक-लो-तो' कहा था?",
        answers: shuffle([
            { text: "कन्नौज", correct: false },
            { text: "थानेश्वर", correct: false },
            { text: "प्रयाग", correct: false },
            { text: "मगध", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग ने अपने यात्रा वृत्तांत में मगध क्षेत्र को 'मोक-लो-तो' कहा है।"
    },
    {
        question: "वर्धन वंश के शासक किस धर्म के अनुयायी थे?",
        answers: shuffle([
            { text: "शैव", correct: false },
            { text: "बौद्ध", correct: false },
            { text: "वैष्णव", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वर्धन वंश के शासक विविध धार्मिक दृष्टिकोण रखते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> पुष्यभूति और प्रभाकरवर्धन शिव के उपासक थे, जबकि हर्षवर्धन ने पहले शैव धर्म का पालन किया और बाद में बौद्ध धर्म (महायान) को अपनाया।"
    },
    {
        question: "हर्षवर्धन और पुलकेशिन II के बीच युद्ध का उल्लेख किस अभिलेख में मिलता है?",
        answers: shuffle([
            { text: "भीतरी अभिलेख", correct: false },
            { text: "प्रयाग प्रशस्ति", correct: false },
            { text: "ऐहोल अभिलेख", correct: true },
            { text: "मंदसौर अभिलेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कर्नाटक में स्थित ऐहोल अभिलेख चालुक्य शासक पुलकेशिन II से संबंधित है, जिसमें हर्षवर्धन पर उसकी विजय का स्पष्ट उल्लेख है।"
    },
    {
        question: "बाणभट्ट द्वारा रचित 'हर्षचरित' किस प्रकार की रचना है?",
        answers: shuffle([
            { text: "ऐतिहासिक नाटक", correct: false },
            { text: "आत्मकथा", correct: false },
            { text: "ऐतिहासिक जीवनी", correct: true },
            { text: "यात्रा वृत्तांत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हर्षचरित' हर्षवर्धन के जीवन पर आधारित एक ऐतिहासिक जीवनी है, जिसे बाणभट्ट ने संस्कृत में लिखा था।"
    },
    {
        question: "हर्षवर्धन के शासनकाल में 'उपरिक' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "जिला का प्रमुख", correct: false },
            { text: "प्रांत का प्रमुख", correct: true },
            { text: "गाँव का प्रमुख", correct: false },
            { text: "सेनापति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल की तरह, हर्षवर्धन के प्रशासन में भी प्रांत (भुक्ति) का प्रमुख 'उपरिक' कहलाता था।"
    },
    {
        question: "ह्वेन त्सांग ने भारत में कुल कितने वर्ष बिताए?",
        answers: shuffle([
            { text: "12 वर्ष", correct: false },
            { text: "15 वर्ष", correct: true },
            { text: "16 वर्ष", correct: false },
            { text: "10 वर्ष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ह्वेन त्सांग 629 ईस्वी से 644 ईस्वी तक, यानी कुल 15 वर्ष भारत में रहा था।"
    },
    {
        question: "'राज्याभिषेक' के बाद हर्षवर्धन ने कौनसी उपाधि धारण की थी?",
        answers: shuffle([
            { text: "परमेश्वर", correct: false },
            { text: "महाराजाधिराज", correct: false },
            { text: "शिलादित्य", correct: true },
            { text: "परमभट्टारक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने 'शिलादित्य' की उपाधि धारण की थी, जिसका अर्थ है 'सूर्य के समान'।"
    },
    {
        question: "हर्षवर्धन ने किस शासक के साथ मिलकर गौड़ शासक शशांक को पराजित किया था?",
        answers: shuffle([
            { text: "देवगुप्त", correct: false },
            { text: "भास्करवर्मन", correct: true },
            { text: "पुलकेशिन II", correct: false },
            { text: "यशोवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन ने कामरूप (आधुनिक असम) के शासक भास्करवर्मन के साथ एक मैत्री संधि कर गौड़ शासक शशांक को पराजित किया था।"
    },
    {
        question: "किस शासक को 'परमसौगत' भी कहा जाता था?",
        answers: shuffle([
            { text: "प्रभाकरवर्धन", correct: false },
            { text: "राज्यवर्धन", correct: true },
            { text: "हर्षवर्धन", correct: false },
            { text: "भास्करवर्मन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हर्षवर्धन के भाई राज्यवर्धन को बौद्ध धर्म के प्रति उसकी गहरी आस्था के कारण 'परमसौगत' कहा जाता था।"
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