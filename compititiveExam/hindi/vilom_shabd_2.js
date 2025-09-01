const questions = [
    {
        topHeading: "विलोम शब्द पर आधारित 50 बहुविकल्पीय प्रश्न part 2 (quiz_no.38)"
    },
    {
        question: "'अनाथ' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "धनी", correct: false },
            { text: "निर्धन", correct: false },
            { text: "सनाथ", correct: true },
            { text: "बेकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनाथ' का अर्थ होता है जिसका कोई मालिक या संरक्षक न हो, जबकि 'सनाथ' का अर्थ होता है जिसका कोई मालिक या संरक्षक हो।"
    },
    {
        question: "'अथ' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अंत", correct: false },
            { text: "पूर्ण", correct: false },
            { text: "इति", correct: true },
            { text: "समाप्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अथ' का अर्थ होता है 'प्रारंभ' और 'इति' का अर्थ होता है 'समाप्ति' या 'अन्त'।"
    },
    {
        question: "'अमृत' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "विष", correct: true },
            { text: "मधुर", correct: false },
            { text: "अमर", correct: false },
            { text: "पीयूष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमृत' का अर्थ होता है जीवन प्रदान करने वाला पेय, जबकि 'विष' का अर्थ 'जहर' होता है।"
    },
    {
        question: "'अज्ञ' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अल्पज्ञ", correct: false },
            { text: "विज्ञ", correct: true },
            { text: "मूर्ख", correct: false },
            { text: "सर्वज्ञ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अज्ञ' का अर्थ होता है 'ज्ञानहीन', जबकि 'विज्ञ' का अर्थ होता है 'जानकार' या 'विद्वान'।"
    },
    {
        question: "'रिक्त' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "खाली", correct: false },
            { text: "पूर्ण", correct: false },
            { text: "भरा", correct: true },
            { text: "खाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रिक्त' का अर्थ 'खाली' होता है, जबकि 'भरा' का अर्थ 'भरा हुआ' होता है।"
    },
    {
        question: "'अवनति' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "उन्नति", correct: true },
            { text: "प्रगति", correct: false },
            { text: "पतन", correct: false },
            { text: "विकास", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अवनति' का अर्थ होता है 'पतन' या 'गिरावट', जबकि 'उन्नति' का अर्थ 'प्रगति' या 'ऊपर उठना' होता है।"
    },
    {
        question: "'अनुराग' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "विराग", correct: true },
            { text: "प्रेम", correct: false },
            { text: "मोह", correct: false },
            { text: "द्वेष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अनुराग' का अर्थ होता है 'प्रेम' या 'आसक्ति', जबकि 'विराग' का अर्थ 'विरक्ति' या 'उदासीनता' होता है।"
    },
    {
        question: "'आकर्षण' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "विकर्षण", correct: true },
            { text: "अनाकर्षण", correct: false },
            { text: "प्रतिकर्षण", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आकर्षण' का अर्थ 'खिंचाव' होता है, जबकि 'विकर्षण' का अर्थ 'दूर धकेलना' या 'प्रतिकर्षण' होता है।"
    },
    {
        question: "'आकाश' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "पाताल", correct: true },
            { text: "धरती", correct: false },
            { text: "नभ", correct: false },
            { text: "गगन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आकाश' का अर्थ 'ऊपर' होता है, जबकि 'पाताल' का अर्थ 'नीचे' या 'पृथ्वी के नीचे' होता है।"
    },
    {
        question: "'इच्छा' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अपेक्षा", correct: false },
            { text: "अनिच्छा", correct: true },
            { text: "आशा", correct: false },
            { text: "कामना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'इच्छा' का अर्थ 'चाह' होता है, जबकि 'अनिच्छा' का अर्थ 'अचाह' या 'अनिच्छुकता' होता है।"
    },
    {
        question: "'उत्कृष्ट' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "निकृष्ट", correct: true },
            { text: "अपकर्ष", correct: false },
            { text: "उत्तम", correct: false },
            { text: "श्रेष्ठ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उत्कृष्ट' का अर्थ 'सबसे अच्छा' होता है, जबकि 'निकृष्ट' का अर्थ 'सबसे बुरा' या 'निम्न स्तर का' होता है।"
    },
    {
        question: "'उदय' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अस्त", correct: true },
            { text: "पतन", correct: false },
            { text: "अंधकार", correct: false },
            { text: "निशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उदय' का अर्थ 'सूर्य का निकलना' होता है, जबकि 'अस्त' का अर्थ 'सूर्य का छिपना' होता है।"
    },
    {
        question: "'उत्तीर्ण' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अनुत्तीर्ण", correct: true },
            { text: "असफल", correct: false },
            { text: "हार", correct: false },
            { text: "विफल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उत्तीर्ण' का अर्थ 'पास होना' होता है, जबकि 'अनुत्तीर्ण' का अर्थ 'फेल होना' होता है।"
    },
    {
        question: "'कृतज्ञ' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "कृतघ्न", correct: true },
            { text: "अकृतज्ञ", correct: false },
            { text: "निर्दयी", correct: false },
            { text: "अमान्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कृतज्ञ' का अर्थ 'उपकार मानने वाला' होता है, जबकि 'कृतघ्न' का अर्थ 'उपकार न मानने वाला' होता है।"
    },
    {
        question: "'कृत्रिम' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "असली", correct: false },
            { text: "प्राकृतिक", correct: true },
            { text: "सहज", correct: false },
            { text: "बनावटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कृत्रिम' का अर्थ 'मानवनिर्मित' होता है, जबकि 'प्राकृतिक' का अर्थ 'प्रकृति द्वारा निर्मित' होता है।"
    },
    {
        question: "'योगी' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "भोगी", correct: true },
            { text: "रोगी", correct: false },
            { text: "संन्यासी", correct: false },
            { text: "गृहस्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'योगी' का अर्थ 'तपस्या करने वाला' होता है, जबकि 'भोगी' का अर्थ 'सुख-सुविधाओं का उपभोग करने वाला' होता है।"
    },
    {
        question: "'घृणा' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "क्रोध", correct: false },
            { text: "दया", correct: false },
            { text: "प्रेम", correct: true },
            { text: "द्वेष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घृणा' का अर्थ 'नफरत' होता है, जबकि 'प्रेम' का अर्थ 'प्यार' होता है।"
    },
    {
        question: "'चिरंतन' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "शाश्वत", correct: false },
            { text: "सनातन", correct: false },
            { text: "नश्वर", correct: true },
            { text: "स्थायी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चिरंतन' का अर्थ 'सदैव रहने वाला' होता है, जबकि 'नश्वर' का अर्थ 'नष्ट होने वाला' होता है।"
    },
    {
        question: "'जंगम' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "स्थिर", correct: false },
            { text: "स्थावर", correct: true },
            { text: "चलायमान", correct: false },
            { text: "अचल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जंगम' का अर्थ 'चलने वाला' होता है, जबकि 'स्थावर' का अर्थ 'स्थिर' या 'अचल' होता है।"
    },
    {
        question: "'ज्ञानी' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "मूर्ख", correct: false },
            { text: "अज्ञानी", correct: true },
            { text: "विद्वान", correct: false },
            { text: "अज्ञ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'ज्ञानी' का अर्थ 'ज्ञानवान' होता है, जबकि 'अज्ञानी' का अर्थ 'ज्ञानहीन' होता है।"
    },
    {
        question: "'दयालु' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "निर्दयी", correct: true },
            { text: "कठोर", correct: false },
            { text: "क्रूर", correct: false },
            { text: "निष्ठुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दयालु' का अर्थ 'दया करने वाला' होता है, जबकि 'निर्दयी' का अर्थ 'दया न करने वाला' होता है।"
    },
    {
        question: "'तामसिक' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "राजसिक", correct: false },
            { text: "सात्त्विक", correct: true },
            { text: "प्रकाश", correct: false },
            { text: "अंधकार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तामसिक' का अर्थ 'अंधकारमय' या 'नकारात्मक' होता है, जबकि 'सात्त्विक' का अर्थ 'सकारात्मक' या 'शुद्ध' होता है।"
    },
    {
        question: "'तीव्र' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "मंद", correct: true },
            { text: "धीमा", correct: false },
            { text: "सुस्त", correct: false },
            { text: "आलसी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तीव्र' का अर्थ 'तेज' होता है, जबकि 'मंद' का अर्थ 'धीमा' होता है।"
    },
    {
        question: "'दीर्घ' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "छोटा", correct: false },
            { text: "लघु", correct: true },
            { text: "हस्व", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दीर्घ' का अर्थ 'बड़ा' या 'लंबा' होता है, जबकि 'लघु' का अर्थ 'छोटा' होता है।"
    },
    {
        question: "'दुर्लभ' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "सुलभ", correct: true },
            { text: "आसान", correct: false },
            { text: "प्राप्त", correct: false },
            { text: "सामान्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुर्लभ' का अर्थ 'कठिनाई से प्राप्त होने वाला' होता है, जबकि 'सुलभ' का अर्थ 'आसानी से प्राप्त होने वाला' होता है।"
    },
    {
        question: "'संयोग' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "वियोग", correct: true },
            { text: "अलगाव", correct: false },
            { text: "जुदाई", correct: false },
            { text: "बिछोह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संयोग' का अर्थ 'मिलना' या 'जुड़ना' होता है, जबकि 'वियोग' का अर्थ 'बिछड़ना' होता है।"
    },
    {
        question: "'निंदा' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "स्तुति", correct: true },
            { text: "प्रशंसा", correct: false },
            { text: "निंदा", correct: false },
            { text: "अपमान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निंदा' का अर्थ 'बुराई करना' होता है, जबकि 'स्तुति' का अर्थ 'प्रशंसा करना' होता है।"
    },
    {
        question: "'पंडित' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "मूर्ख", correct: true },
            { text: "विद्वान", correct: false },
            { text: "ज्ञानी", correct: false },
            { text: "अज्ञानी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पंडित' का अर्थ 'विद्वान' होता है, जबकि 'मूर्ख' का अर्थ 'बुद्धिहीन' होता है।"
    },
    {
        question: "'पक्ष' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "विपक्ष", correct: true },
            { text: "विरोध", correct: false },
            { text: "प्रतिपक्ष", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पक्ष' का अर्थ 'समूह या तरफ' होता है, जबकि 'विपक्ष' का अर्थ 'विरोधी समूह या तरफ' होता है।"
    },
    {
        question: "'प्रकाश' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अंधेरा", correct: false },
            { text: "अंधकार", correct: true },
            { text: "रात्रि", correct: false },
            { text: "तम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रकाश' का अर्थ 'रोशनी' होता है, जबकि 'अंधकार' का अर्थ 'अंधेरा' होता है।"
    },
    {
        question: "'फायदा' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "लाभ", correct: false },
            { text: "हानि", correct: true },
            { text: "मुनाफा", correct: false },
            { text: "नुकसान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'फायदा' का अर्थ 'लाभ' होता है, जबकि 'हानि' का अर्थ 'नुकसान' होता है।"
    },
    {
        question: "'बंधन' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "मुक्ति", correct: true },
            { text: "स्वतंत्रता", correct: false },
            { text: "मोक्ष", correct: false },
            { text: "कैद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बंधन' का अर्थ 'कैद' या 'बाँधना' होता है, जबकि 'मुक्ति' का अर्थ 'आज़ादी' होता है।"
    },
    {
        question: "'बर्बर' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "सभ्य", correct: true },
            { text: "असभ्य", correct: false },
            { text: "जंगली", correct: false },
            { text: "क्रूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बर्बर' का अर्थ 'असभ्य' या 'जंगली' होता है, जबकि 'सभ्य' का अर्थ 'सुसंस्कृत' या 'शिष्ट' होता है।"
    },
    {
        question: "'भूषण' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "दूषण", correct: true },
            { text: "आभूषण", correct: false },
            { text: "सुंदर", correct: false },
            { text: "अभूषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भूषण' का अर्थ 'शोभा बढ़ाने वाला' होता है, जबकि 'दूषण' का अर्थ 'खराबी पैदा करने वाला' होता है।"
    },
    {
        question: "'मरण' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "जीवन", correct: true },
            { text: "मृत्यु", correct: false },
            { text: "जन्म", correct: false },
            { text: "अमर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मरण' का अर्थ 'मरना' होता है, जबकि 'जीवन' का अर्थ 'जीना' होता है।"
    },
    {
        question: "'मिलन' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "वियोग", correct: true },
            { text: "जुदाई", correct: false },
            { text: "बिछड़ना", correct: false },
            { text: "उपरोक्त सभी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलन' का अर्थ 'मिलना' होता है, जबकि 'वियोग' का अर्थ 'बिछड़ना' होता है।"
    },
    {
        question: "'मूक' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "वाचाल", correct: true },
            { text: "बोलचाल", correct: false },
            { text: "गूंगा", correct: false },
            { text: "अवाक्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मूक' का अर्थ 'चुप रहने वाला' या 'गूंगा' होता है, जबकि 'वाचाल' का अर्थ 'अधिक बोलने वाला' होता है।"
    },
    {
        question: "'योगी' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "भोगी", correct: true },
            { text: "रोगी", correct: false },
            { text: "संन्यासी", correct: false },
            { text: "गृहस्थ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'योगी' का अर्थ 'तपस्या करने वाला' होता है, जबकि 'भोगी' का अर्थ 'सुख-सुविधाओं का उपभोग करने वाला' होता है।"
    },
    {
        question: "'राग' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "विराग", correct: true },
            { text: "द्वेष", correct: false },
            { text: "मोह", correct: false },
            { text: "अनुराग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'राग' का अर्थ 'प्रेम' या 'आसक्ति' होता है, जबकि 'विराग' का अर्थ 'उदासीनता' या 'विरक्ति' होता है।"
    },
    {
        question: "'रिक्त' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "खाली", correct: false },
            { text: "पूर्ण", correct: false },
            { text: "भरा", correct: true },
            { text: "खली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रिक्त' का अर्थ 'खाली' होता है, जबकि 'भरा' का अर्थ 'भरा हुआ' होता है।"
    },
    {
        question: "'लौकिक' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "पारलौकिक", correct: true },
            { text: "अलौकिक", correct: false },
            { text: "सांसारिक", correct: false },
            { text: "दैविक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लौकिक' का अर्थ 'इस लोक का' होता है, जबकि 'पारलौकिक' का अर्थ 'दूसरे लोक का' होता है।"
    },
    {
        question: "'सक्रिय' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "निष्क्रिय", correct: true },
            { text: "अकर्मण्य", correct: false },
            { text: "आलसी", correct: false },
            { text: "सुस्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सक्रिय' का अर्थ 'कार्य में लीन' होता है, जबकि 'निष्क्रिय' का अर्थ 'कार्य न करने वाला' होता है।"
    },
    {
        question: "'सजीव' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "निर्जीव", correct: true },
            { text: "बेजान", correct: false },
            { text: "मृत", correct: false },
            { text: "अचेतन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सजीव' का अर्थ 'जीवित' होता है, जबकि 'निर्जीव' का अर्थ 'जिसमें जान न हो' होता है।"
    },
    {
        question: "'सुलभ' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "दुर्लभ", correct: true },
            { text: "दुष्कर", correct: false },
            { text: "कठिन", correct: false },
            { text: "अगम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुलभ' का अर्थ 'आसानी से प्राप्त होने वाला' होता है, जबकि 'दुर्लभ' का अर्थ 'कठिनाई से प्राप्त होने वाला' होता है।"
    },
    {
        question: "'स्वतंत्र' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "परतंत्र", correct: true },
            { text: "गुलाम", correct: false },
            { text: "अधीन", correct: false },
            { text: "बंदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'स्वतंत्र' का अर्थ 'आज़ाद' होता है, जबकि 'परतंत्र' का अर्थ 'दूसरों के अधीन' होता है।"
    },
    {
        question: "'संयोग' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "वियोग", correct: true },
            { text: "अलगाव", correct: false },
            { text: "जुदाई", correct: false },
            { text: "बिछोह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संयोग' का अर्थ 'मिलना' या 'जुड़ना' होता है, जबकि 'वियोग' का अर्थ 'बिछड़ना' होता है।"
    },
    {
        question: "'साकार' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "निराकार", correct: true },
            { text: "अदृश्य", correct: false },
            { text: "अमूर्त", correct: false },
            { text: "निराधार", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'साकार' का अर्थ 'जिसका आकार हो' होता है, जबकि 'निराकार' का अर्थ 'जिसका कोई आकार न हो' होता है।"
    },
    {
        question: "'सगुण' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "अवगुण", correct: false },
            { text: "निर्गुण", correct: true },
            { text: "दोष", correct: false },
            { text: "दुर्गुण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सगुण' का अर्थ 'गुणों सहित' होता है, जबकि 'निर्गुण' का अर्थ 'गुणों से रहित' होता है।"
    },
    {
        question: "'सूक्ष्म' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "विशाल", correct: false },
            { text: "स्थूल", correct: true },
            { text: "बड़ा", correct: false },
            { text: "विस्तृत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सूक्ष्म' का अर्थ 'बहुत छोटा' होता है, जबकि 'स्थूल' का अर्थ 'बहुत बड़ा' या 'स्थूल' होता है।"
    },
    {
        question: "'आलस्य' का विलोम शब्द क्या है?",
        answers: shuffle([
            { text: "स्फूर्ति", correct: true },
            { text: "आलस", correct: false },
            { text: "सुस्ती", correct: false },
            { text: "सक्रियता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आलस्य' का अर्थ 'सुस्ती' होता है, जबकि 'स्फूर्ति' का अर्थ 'उत्साह' या 'तेजी' होता है।"
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