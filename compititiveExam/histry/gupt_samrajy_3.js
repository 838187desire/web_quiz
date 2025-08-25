const questions = [
    {
        topHeading: "गुप्त साम्राज्य पर आधारित बहुविकल्पी प्रश्न part 3 (quiz_no.83)"
    },
    {
        question: "गुप्त साम्राज्य के पतन का एक प्रमुख कारण हूणों का आक्रमण था। हूणों ने किस दर्रे से भारत में प्रवेश किया था?",
        answers: shuffle([
            { text: "खैबर दर्रा", correct: true },
            { text: "बोलन दर्रा", correct: false },
            { text: "गोमल दर्रा", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हूणों ने मध्य एशिया से आकर खैबर दर्रे के माध्यम से भारत के उत्तर-पश्चिमी हिस्सों पर आक्रमण किया था।"
    },
    {
        question: "गुप्त काल में 'भूमि' कर की दर क्या थी?",
        answers: shuffle([
            { text: "1/4 से 1/6", correct: true },
            { text: "1/2 से 1/4", correct: false },
            { text: "1/6 से 1/8", correct: false },
            { text: "1/8 से 1/10", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में उपज का 1/4 से 1/6 भाग भूमि कर के रूप में लिया जाता था, जिसे 'उद्रंग' और 'उपरिकरा' जैसे नामों से भी जाना जाता था।"
    },
    {
        question: "'सती प्रथा' का पहला अभिलेखीय प्रमाण किस स्थान से प्राप्त हुआ है?",
        answers: shuffle([
            { text: "प्रयाग", correct: false },
            { text: "एरण", correct: true },
            { text: "जूनागढ़", correct: false },
            { text: "मंदसौर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मध्य प्रदेश के एरण से प्राप्त 510 ईस्वी के अभिलेख में सती प्रथा का पहला लिखित प्रमाण मिलता है, जिसमें भानुगुप्त के सामंत गोपराज की पत्नी के सती होने का उल्लेख है।"
    },
    {
        question: "गुप्त काल में 'महाबलधिकृत' नामक अधिकारी का क्या कार्य था?",
        answers: shuffle([
            { text: "सैन्य कमांडर", correct: true },
            { text: "राजस्व अधिकारी", correct: false },
            { text: "न्यायाधीश", correct: false },
            { text: "न्याय मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'महाबलधिकृत' गुप्त साम्राज्य में सेना का सर्वोच्च कमांडर या मुख्य सेनापति होता था।"
    },
    {
        question: "किस गुप्त शासक के सिक्कों पर 'महेंद्रादित्य' की उपाधि अंकित है?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुमारगुप्त प्रथम ने 'महेन्द्रादित्य' की उपाधि धारण की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> यह उपाधि उसके सिक्कों पर भी मिलती है।"
    },
    {
        question: "गुप्त काल में 'दशमलव प्रणाली' का आविष्कार किसने किया था?",
        answers: shuffle([
            { text: "वराहमिहिर", correct: false },
            { text: "आर्यभट्ट", correct: true },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "धनवंतरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल के महान गणितज्ञ और खगोलशास्त्री आर्यभट्ट ने दशमलव प्रणाली और शून्य की अवधारणा का प्रतिपादन किया था।"
    },
    {
        question: "किस गुप्त शासक ने महरौली के लौह स्तंभ का निर्माण करवाया था?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली में स्थित महरौली का लौह स्तंभ, जिस पर 'चंद्र' नामक राजा का उल्लेख है, को चंद्रगुप्त द्वितीय से जोड़ा जाता है।"
    },
    {
        question: "गुप्त काल में 'आयुर्वेद' के विद्वान कौन थे, जो चिकित्सा के लिए प्रसिद्ध थे?",
        answers: shuffle([
            { text: "चरक", correct: false },
            { text: "सुश्रुत", correct: false },
            { text: "धनवंतरि", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धनवंतरि, जो चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे, उन्हें आयुर्वेद का एक महान विद्वान और चिकित्सक माना जाता था।"
    },
    {
        question: "किस गुप्त शासक के शासनकाल में हूणों का अंतिम आक्रमण हुआ था?",
        answers: shuffle([
            { text: "स्कंदगुप्त", correct: false },
            { text: "भानुगुप्त", correct: false },
            { text: "नरसिंहगुप्त बालादित्य", correct: false },
            { text: "विष्णुगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त साम्राज्य पर हूणों का अंतिम और निर्णायक आक्रमण विष्णुगुप्त के शासनकाल में हुआ, जिसने साम्राज्य के पतन को गति दी।"
    },
    {
        question: "गुप्त काल में 'अग्रहार' क्या था?",
        answers: shuffle([
            { text: "कर-मुक्त भूमि अनुदान", correct: true },
            { text: "एक प्रकार का कर", correct: false },
            { text: "गाँवों का समूह", correct: false },
            { text: "व्यापारियों का संगठन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अग्रहार' ब्राह्मणों और धार्मिक संस्थानों को दिया जाने वाला भूमि अनुदान था, जो कर से मुक्त होता था।"
    },
    {
        question: "'गुप्त संवत' की शुरुआत किस शासक ने की थी?",
        answers: shuffle([
            { text: "श्रीगुप्त", correct: false },
            { text: "घटोत्कचगुप्त", correct: false },
            { text: "चंद्रगुप्त प्रथम", correct: true },
            { text: "समुद्रगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त प्रथम ने अपने राज्यारोहण के उपलक्ष्य में 319-320 ईस्वी में 'गुप्त संवत' की शुरुआत की थी।"
    },
    {
        question: "गुप्त काल में 'अष्टछाप' नामक विद्वानों का समूह किसके दरबार में था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "अष्टछाप गुप्त काल में नहीं था", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अष्टछाप नामक कवि समूह की स्थापना 16वीं शताब्दी में विट्ठलनाथ ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका गुप्त काल से कोई संबंध नहीं है।"
    },
    {
        question: "गुप्त काल में 'भीतरी स्तंभलेख' किस शासक से संबंधित है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीतरी स्तंभलेख स्कंदगुप्त से संबंधित है, जिसमें हूणों के साथ उसके युद्धों का उल्लेख है।"
    },
    {
        question: "गुप्त काल में 'मंदिर' वास्तुकला की किस शैली में पत्थर का प्रयोग अधिक हुआ?",
        answers: shuffle([
            { text: "नागर शैली", correct: true },
            { text: "द्रविड़ शैली", correct: false },
            { text: "वेसर शैली", correct: false },
            { text: "गंधार शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में नागर शैली के मंदिरों में ऊँचे शिखर और गर्भगृह होते थे, और उनमें पत्थर का व्यापक प्रयोग हुआ था।"
    },
    {
        question: "'कुमारसंभव' नामक महाकाव्य की रचना किसने की थी?",
        answers: shuffle([
            { text: "शूद्रक", correct: false },
            { text: "विशाखदत्त", correct: false },
            { text: "कालिदास", correct: true },
            { text: "आर्यभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कालिदास ने 'कुमारसंभव' नामक महाकाव्य की रचना की थी, जिसमें शिव-पार्वती विवाह और कार्तिकेय के जन्म की कहानी का वर्णन है।"
    },
    {
        question: "गुप्त काल में 'ग्राम' (गाँव) के प्रशासन का प्रमुख कौन होता था?",
        answers: shuffle([
            { text: "उपारिक", correct: false },
            { text: "ग्रामीक", correct: true },
            { text: "महादंडनायक", correct: false },
            { text: "महाबलाधिकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गाँव, जो सबसे छोटी प्रशासनिक इकाई थी, का प्रमुख 'ग्रामीक' कहलाता था।"
    },
    {
        question: "किस गुप्त शासक ने चांदी के सिक्के जारी किए थे?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने पश्चिमी भारत में शकों को पराजित करने के बाद 'रूपक' नामक चांदी के सिक्के जारी किए थे।"
    },
    {
        question: "गुप्त काल में 'दशपुर' नामक स्थान किसके लिए प्रसिद्ध था?",
        answers: shuffle([
            { text: "सैन्य छावनी", correct: false },
            { text: "व्यापारिक केंद्र", correct: false },
            { text: "रेशम बुनकरों की श्रेणी", correct: true },
            { text: "धार्मिक केंद्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंदसौर अभिलेख में दशपुर (आधुनिक मंदसौर) के रेशम बुनकरों की एक श्रेणी (गिल्ड) का वर्णन है।"
    },
    {
        question: "गुप्त साम्राज्य के पतन का एक प्रमुख कारण क्या था?",
        answers: shuffle([
            { text: "आंतरिक विद्रोह", correct: false },
            { text: "हूणों का आक्रमण", correct: false },
            { text: "आर्थिक संकट", correct: false },
            { text: "ये सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त साम्राज्य के पतन के लिए कई कारक जिम्मेदार थे, जिनमें आंतरिक विद्रोह, हूणों के लगातार आक्रमण, और आर्थिक संकट शामिल थे।"
    },
    {
        question: "किस गुप्त शासक को 'शकारि' की उपाधि से जाना जाता है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पराजित करने के बाद 'शकारि' की उपाधि धारण की थी।"
    },
    {
        question: "गुप्त काल में 'महानवमी' नामक उत्सव का वर्णन किस विदेशी यात्री ने किया है?",
        answers: shuffle([
            { text: "फाह्यान", correct: true },
            { text: "ह्वेन त्सांग", correct: false },
            { text: "इत्सिंग", correct: false },
            { text: "सुंगयुन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चीनी यात्री फाह्यान ने अपने यात्रा वृत्तांत में गुप्त साम्राज्य के दौरान मनाए जाने वाले 'महानवमी' उत्सव का उल्लेख किया है।"
    },
    {
        question: "'आयुर्वेद' के विद्वान धनवंतरि किसके दरबार में थे?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> धनवंतरि, जो आयुर्वेद के महान विद्वान थे, चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे।"
    },
    {
        question: "गुप्त काल में 'वास्तुशास्त्र' का प्रमुख विद्वान कौन था?",
        answers: shuffle([
            { text: "आर्यभट्ट", correct: false },
            { text: "वराहमिहिर", correct: true },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "अमरसिंह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वराहमिहिर ने खगोलशास्त्र के साथ-साथ वास्तुशास्त्र पर भी लिखा था, जिसमें 'बृहत्संहिता' नामक ग्रंथ प्रमुख है।"
    },
    {
        question: "किस गुप्त शासक को 'लिच्छवि दौहित्र' कहा जाता था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त की माता कुमारदेवी लिच्छवि राजकुमारी थीं, इसलिए उसे 'लिच्छवि दौहित्र' कहा जाता था।"
    },
    {
        question: "'दशावतार मंदिर', जो गुप्त काल का एक प्रसिद्ध मंदिर है, किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "बेतवा", correct: true },
            { text: "गोदावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के देवगढ़ में स्थित दशावतार मंदिर, बेतवा नदी के तट पर स्थित है।"
    },
    {
        question: "गुप्त काल में 'रेशम बुनकरों' की एक श्रेणी का उल्लेख किस अभिलेख में मिलता है?",
        answers: shuffle([
            { text: "प्रयाग प्रशस्ति", correct: false },
            { text: "जूनागढ़ अभिलेख", correct: false },
            { text: "मंदसौर अभिलेख", correct: true },
            { text: "एरण अभिलेख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंदसौर अभिलेख में दशपुर (मंदसौर) के रेशम बुनकरों की एक श्रेणी (गिल्ड) का वर्णन है।"
    },
    {
        question: "'अमरकोश' नामक शब्दकोश, जो संस्कृत का एक महत्वपूर्ण ग्रंथ है, के लेखक कौन हैं?",
        answers: shuffle([
            { text: "कालिदास", correct: false },
            { text: "शूद्रक", correct: false },
            { text: "अमरसिंह", correct: true },
            { text: "आर्यभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अमरसिंह, जो चंद्रगुप्त द्वितीय के नवरत्नों में से एक थे, उन्होंने 'अमरकोश' नामक प्रसिद्ध शब्दकोश की रचना की।"
    },
    {
        question: "गुप्त काल में 'ग्राम' (गाँव) के प्रशासन का प्रमुख कौन होता था?",
        answers: shuffle([
            { text: "उपारिक", correct: false },
            { text: "ग्रामीक", correct: true },
            { text: "महादंडनायक", correct: false },
            { text: "महाबलाधिकृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में सबसे छोटी प्रशासनिक इकाई गाँव थी, जिसका प्रमुख 'ग्रामीक' कहलाता था।"
    },
    {
        question: "किस गुप्त शासक ने शकों को पराजित कर 'शकारि' की उपाधि धारण की थी?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने पश्चिमी भारत के अंतिम शक शासक रुद्रसिंह तृतीय को पराजित कर 'शकारि' की उपाधि धारण की थी।"
    },
    {
        question: "गुप्त काल में 'मंदिर' वास्तुकला की किस शैली का विकास हुआ?",
        answers: shuffle([
            { text: "द्रविड़ शैली", correct: false },
            { text: "नागर शैली", correct: true },
            { text: "वेसर शैली", correct: false },
            { text: "इंडो-इस्लामिक शैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में मंदिरों की नागर शैली का विकास हुआ, जिसकी विशेषता ऊंचे शिखर और गर्भगृह थे।<br><br><i class='fa-solid fa-angles-right icon'></i> देवगढ़ का दशावतार मंदिर इसका प्रमुख उदाहरण है।"
    },
    {
        question: "'सूर्य सिद्धांत' नामक ग्रंथ के लेखक कौन हैं, जो गुप्त काल के हैं?",
        answers: shuffle([
            { text: "वराहमिहिर", correct: false },
            { text: "आर्यभट्ट", correct: true },
            { text: "ब्रह्मगुप्त", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आर्यभट्ट ने 'आर्यभटीय' के साथ-साथ 'सूर्य सिद्धांत' नामक ग्रंथ की भी रचना की थी, जिसमें उन्होंने सूर्य और चंद्र ग्रहण की वैज्ञानिक व्याख्या की।"
    },
    {
        question: "किस गुप्त शासक को 'महेन्द्रादित्य' की उपाधि से जाना जाता है?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुमारगुप्त प्रथम ने 'महेन्द्रादित्य' की उपाधि धारण की थी।"
    },
    {
        question: "गुप्त काल में 'अष्टछाप' नामक विद्वानों का समूह किसके दरबार में था?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "अष्टछाप गुप्त काल में नहीं था।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अष्टछाप एक कवि समूह था, जिसकी स्थापना 16वीं शताब्दी में वल्लभाचार्य के पुत्र विट्ठलनाथ ने की थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसका गुप्त काल से कोई संबंध नहीं है।"
    },
    {
        question: "गुप्त साम्राज्य में सबसे अधिक सोने के सिक्के किस शासक ने जारी किए थे?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: true },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कुमारगुप्त प्रथम के शासनकाल में सबसे अधिक संख्या में सोने के सिक्के जारी किए गए थे, जिनसे पता चलता है कि यह साम्राज्य आर्थिक रूप से बहुत समृद्ध था।"
    },
    {
        question: "गुप्त काल में 'हिरण्य' का क्या अर्थ था?",
        answers: shuffle([
            { text: "भूमिकर", correct: false },
            { text: "नकद कर", correct: true },
            { text: "जबरन श्रम", correct: false },
            { text: "धार्मिक कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिरण्य' गुप्त काल में एक प्रकार का कर था, जो नकद रूप में लिया जाता था।"
    },
    {
        question: "'दशावतार मंदिर', जो गुप्त काल का एक प्रसिद्ध मंदिर है, किस नदी के किनारे स्थित है?",
        answers: shuffle([
            { text: "गंगा", correct: false },
            { text: "यमुना", correct: false },
            { text: "बेतवा", correct: true },
            { text: "नर्मदा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उत्तर प्रदेश के देवगढ़ में स्थित दशावतार मंदिर, बेतवा नदी के तट पर स्थित है।"
    },
    {
        question: "'मृच्छकटिकम्' नामक नाटक की रचना किसने की थी, जो गुप्त काल की एक महत्वपूर्ण साहित्यिक कृति है?",
        answers: shuffle([
            { text: "शूद्रक", correct: true },
            { text: "विशाखदत्त", correct: false },
            { text: "कालिदास", correct: false },
            { text: "बाणभट्ट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मृच्छकटिकम्' (मिट्टी की खिलौना गाड़ी) नामक नाटक की रचना शूद्रक ने की थी।"
    },
    {
        question: "किस गुप्त शासक को 'शक्रादित्य' कहा गया है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीतरी स्तंभलेख में स्कंदगुप्त को 'शक्रादित्य' कहा गया है, जिसका अर्थ 'इंद्र के समान महान' होता है।"
    },
    {
        question: "गुप्त काल में 'सामंत' किसे कहा जाता था?",
        answers: shuffle([
            { text: "राजा के अधीनस्थ शासक", correct: true },
            { text: "सैनिक अधिकारी", correct: false },
            { text: "व्यापारी", correct: false },
            { text: "किसान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में 'सामंतवादी' व्यवस्था की शुरुआत हुई थी, जिसमें राजा के अधीनस्थ शासक या बड़े जमींदार 'सामंत' कहलाते थे।"
    },
    {
        question: "किस गुप्त शासक को 'प्रयाग प्रशस्ति' में 'पृथ्वी पर कोई दूसरा नहीं' कहा गया है?",
        answers: shuffle([
            { text: "चंद्रगुप्त प्रथम", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त की महान विजयों के कारण उसके दरबारी कवि हरिषेण ने प्रयाग प्रशस्ति में उसे 'पृथ्वी पर कोई दूसरा नहीं' कहा है।"
    },
    {
        question: "गुप्त काल में 'कला की सबसे अच्छी मूर्तियाँ' कहाँ से मिली हैं?",
        answers: shuffle([
            { text: "सारनाथ", correct: true },
            { text: "मथुरा", correct: false },
            { text: "देवगढ़", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> गुप्त काल में कला का चरमोत्कर्ष देखा गया।<br><br><i class='fa-solid fa-angles-right icon'></i> सारनाथ से मिली बुद्ध की मूर्तियाँ गुप्त कला की उत्कृष्ट कृतियाँ मानी जाती हैं।"
    },
    {
        question: "'नालंदा' विश्वविद्यालय को किस गुप्त शासक ने नष्ट करवाया था?",
        answers: shuffle([
            { text: "हूण", correct: false },
            { text: "शशांक", correct: false },
            { text: "बख्तियार खिलजी", correct: false },
            { text: "नालंदा को किसी गुप्त शासक ने नष्ट नहीं करवाया था।", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नालंदा विश्वविद्यालय की स्थापना कुमारगुप्त प्रथम ने की थी, जबकि इसे 12वीं शताब्दी में बख्तियार खिलजी ने नष्ट कर दिया था।"
    },
    {
        question: "गुप्त काल में 'नकद कर' को क्या कहा जाता था?",
        answers: shuffle([
            { text: "हिरण्य", correct: true },
            { text: "भोग", correct: false },
            { text: "उदक", correct: false },
            { text: "विष्टि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हिरण्य' नकद कर था, जबकि 'भोग' राजा को दी जाने वाली दैनिक उपज थी।"
    },
    {
        question: "किस चीनी यात्री ने गुप्त साम्राज्य के दौरान भारत की आर्थिक समृद्धि का वर्णन किया है?",
        answers: shuffle([
            { text: "ह्वेन त्सांग", correct: false },
            { text: "फाह्यान", correct: true },
            { text: "इत्सिंग", correct: false },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फाह्यान ने अपने यात्रा वृत्तांत में गुप्तकालीन समाज, कानून और व्यवस्था तथा आर्थिक समृद्धि की प्रशंसा की है।"
    },
    {
        question: "किस गुप्त शासक को शकों के उन्मूलन के लिए जाना जाता है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चंद्रगुप्त द्वितीय ने शकों को पराजित किया और पश्चिमी भारत में उनके शासन का अंत किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इस विजय के बाद ही उसने चांदी के सिक्के जारी किए थे।"
    },
    {
        question: "गुप्त काल में 'भीतरी स्तंभलेख' किस शासक से संबंधित है?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> भीतरी स्तंभलेख स्कंदगुप्त से संबंधित है, जिसमें हूणों के साथ उसके युद्धों का उल्लेख है।"
    },
    {
        question: "गुप्त काल में 'मृच्छकटिकम्' नामक नाटक किस विषय पर आधारित है?",
        answers: shuffle([
            { text: "राजाओं की महान विजय", correct: false },
            { text: "धार्मिक सिद्धांत", correct: false },
            { text: "सामान्य जन-जीवन", correct: true },
            { text: "ऐतिहासिक घटनाएँ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> शूद्रक द्वारा रचित 'मृच्छकटिकम्' एक सामाजिक नाटक है जो गुप्त काल के सामान्य लोगों के जीवन, प्रेम और संघर्षों पर आधारित है।"
    },
    {
        question: "किस गुप्त शासक के सिक्कों पर गरुड़ का चिह्न अंकित था?",
        answers: shuffle([
            { text: "श्रीगुप्त", correct: false },
            { text: "समुद्रगुप्त", correct: true },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "स्कंदगुप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त, जो वैष्णव धर्म का अनुयायी था, के सिक्कों पर विष्णु के वाहन गरुड़ का चिह्न अंकित था।"
    },
    {
        question: "गुप्त काल में 'नागर शैली' के मंदिरों की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "ऊंचे शिखर", correct: false },
            { text: "गर्भगृह", correct: false },
            { text: "मंडप", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> नागर शैली के मंदिर में ऊंचे शिखर, गर्भगृह (जहाँ देवता की मूर्ति होती थी) और मंडप (प्रवेश द्वार के पास का हॉल) होते थे।"
    },
    {
        question: "'अश्वमेध यज्ञ' का प्रमाण देने वाले सिक्के किस गुप्त शासक से संबंधित हैं?",
        answers: shuffle([
            { text: "समुद्रगुप्त", correct: false },
            { text: "चंद्रगुप्त द्वितीय", correct: false },
            { text: "कुमारगुप्त प्रथम", correct: false },
            { text: "दोनों (A) और (C)", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समुद्रगुप्त और कुमारगुप्त प्रथम दोनों ने ही अश्वमेध यज्ञ करवाया था, जिसके प्रमाण उनके सिक्कों से मिलते हैं।"
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