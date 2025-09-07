const questions = [
    {
        topHeading: "परसवर्ण संधि पर आधारित 27 बहुविकल्पीय प्रश्न (quiz_no.14)"
    },
    {
        question: "'सम् + कल्प' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "संकल्प", correct: true },
            { text: "संकलप", correct: false },
            { text: "समकल्प", correct: false },
            { text: "सकल्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परसवर्ण संधि के नियम के अनुसार, जब 'म्' के बाद कोई स्पर्श व्यंजन आता है, तो 'म्' अपने बाद वाले व्यंजन के वर्ग के पाँचवें वर्ण में बदल जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'क' के आने पर 'म्' का 'ङ्' हो गया, जिससे 'संकल्प' बना।"
    },
    {
        question: "'उत् + लास' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "उल्लास", correct: true },
            { text: "उत्लास", correct: false },
            { text: "उल्हास", correct: false },
            { text: "उल्लस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परसवर्ण संधि के नियम के अनुसार, जब 'त्' या 'द्' के बाद 'ल' आता है, तो 'त्' या 'द्' का 'ल' हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'उत्' के 'त्' का 'ल' होकर 'उल्लास' शब्द बनता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द परसवर्ण संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "संचय", correct: false },
            { text: "तल्लीन", correct: false },
            { text: "उल्लेख", correct: false },
            { text: "सन्मार्ग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सन्मार्ग' शब्द 'सत् + मार्ग' से मिलकर बना है, जो अनुनासिक संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'संचय', 'तल्लीन' और 'उल्लेख' परसवर्ण संधि के उदाहरण हैं।"
    },
    {
        question: "'सम् + चय' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "सञ्चय", correct: false },
            { text: "संचय", correct: true },
            { text: "समचय", correct: false },
            { text: "संच्य", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब 'म्' के बाद 'च्' आता है, तो 'म्' का 'ञ्' हो जाता है (च-वर्ग का पाँचवाँ वर्ण)।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'सम्' के 'म्' का 'ञ्' होकर 'संचय' शब्द बनता है।"
    },
    {
        question: "'तल्लीन' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "तत् + लीन", correct: true },
            { text: "तल् + लीन", correct: false },
            { text: "तत + लन", correct: false },
            { text: "तत + लीन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परसवर्ण संधि के अनुसार, 'तत्' के 'त्' का 'ल' होकर 'तल्लीन' बना है।"
    },
    {
        question: "किस विकल्प में 'परसवर्ण संधि' का सही उदाहरण है?",
        answers: shuffle([
            { text: "सदा + एव = सदैव", correct: false },
            { text: "दिक् + गज = दिग्गज", correct: false },
            { text: "उत् + लेख = उल्लेख", correct: true },
            { text: "रामस् + शेते = रामश्शेते", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह परसवर्ण संधि का सही उदाहरण है, जहाँ 'त्' के बाद 'ल' आने पर 'त्' का 'ल' हो गया है।"
    },
    {
        question: "'सम + तोष' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "संतोष", correct: true },
            { text: "संतोस", correct: false },
            { text: "समतोष", correct: false },
            { text: "सन्तष", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'म्' के बाद 'त्' आने पर 'म्' का 'न्' हो जाता है (त-वर्ग का पाँचवाँ वर्ण)।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः, 'संतोष' शब्द बनता है।"
    },
    {
        question: "'सम + गम' के मेल से कौन सा शब्द बनता है?",
        answers: shuffle([
            { text: "संगम", correct: true },
            { text: "संगगम", correct: false },
            { text: "संगाम", correct: false },
            { text: "सगम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'म्' के बाद 'ग्' (क-वर्ग का वर्ण) आने पर 'म्' का 'ङ्' हो जाता है (क-वर्ग का पाँचवाँ वर्ण), जिससे 'संगम' बनता है।"
    },
    {
        question: "'दिक् + मंडल' की संधि है:",
        answers: shuffle([
            { text: "दिगमंडल", correct: false },
            { text: "दिग्मंडल", correct: false },
            { text: "दिङ्गमंडल", correct: false },
            { text: "दिङ्मंडल", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जब 'क्' के बाद 'म्' आता है तो 'क्' अपने वर्ग के पाँचवे वर्ण 'ङ' में बदल जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दिङ्मंडल' परसवर्ण संधि का उदाहरण है।"
    },
    {
        question: "'उत् + लंघन' का सही संधि रूप क्या है?",
        answers: shuffle([
            { text: "उल्लंघन", correct: true },
            { text: "उलघन", correct: false },
            { text: "उलंघन", correct: false },
            { text: "उल्लांघन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्' के बाद 'ल' आने पर 'त्' का 'ल' हो जाता है, जिससे 'उल्लंघन' बनता है।"
    },
    {
        question: "'संजय' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "सं + जय", correct: false },
            { text: "सम + जय", correct: true },
            { text: "सञ् + जय", correct: false },
            { text: "सन् + जय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संजय' का सही संधि विच्छेद 'सम + जय' है, क्योंकि 'म्' के बाद 'ज्' आने पर 'म्' का 'ञ्' (च-वर्ग का पाँचवाँ वर्ण) हो जाता है।"
    },
    {
        question: "'उल्लेख' में कौन सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "परसवर्ण संधि", correct: true },
            { text: "अनुनासिक संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उल्लेख' का संधि विच्छेद 'उत् + लेख' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'त्' का 'ल' में परिवर्तन हुआ है, जो परसवर्ण संधि का नियम है।"
    },
    {
        question: "'भगवत् + लीला' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "भगवल्लीला", correct: true },
            { text: "भगवतलीला", correct: false },
            { text: "भगवदलीला", correct: false },
            { text: "भगवत्तलीला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्' के बाद 'ल' आने पर 'त्' का 'ल' हो जाता है, जिससे 'भगवल्लीला' बनता है।"
    },
    {
        question: "'किम + चित' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "किंचित", correct: true },
            { text: "किंचिंत", correct: false },
            { text: "किंचत", correct: false },
            { text: "किं + चित", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'म्' के बाद 'च्' आने पर 'म्' का 'ञ्' (या अनुस्वार) हो जाता है, जिससे 'किंचित' बनता है।"
    },
    {
        question: "'संपूर्ण' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "सम् + पूर्ण", correct: true },
            { text: "सं + पूर्ण", correct: false },
            { text: "सम + पूर्ण", correct: false },
            { text: "सम् + पूर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'म्' के बाद 'प्' आने पर 'म्' का 'म्' ही रहता है और अनुस्वार में बदल जाता है (प-वर्ग का पाँचवाँ वर्ण)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह परसवर्ण संधि का उदाहरण है।"
    },
    {
        question: "'सम् + भव' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "संभव", correct: true },
            { text: "संभ", correct: false },
            { text: "संभाव", correct: false },
            { text: "संभाओ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परसवर्ण संधि के नियम के अनुसार, जब 'म्' के बाद कोई स्पर्श व्यंजन (जैसे 'भ') आता है, तो 'म्' का अनुस्वार (ं) हो जाता है। अतः, 'सम् + भव' से 'संभव' शब्द बनता है।"
    },
    {
        question: "'परसवर्ण' का शाब्दिक अर्थ क्या है?",
        answers: shuffle([
            { text: "पूर्व वर्ण का परिवर्तन", correct: false },
            { text: "बाद वाले वर्ण का परिवर्तन", correct: false },
            { text: "पूर्व वर्ण का बाद वाले वर्ण जैसा हो जाना", correct: true },
            { text: "दो वर्णों का लोप", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परसवर्ण' का अर्थ है 'बाद वाले वर्ण' के 'समान' हो जाना।<br><br><i class='fa-solid fa-angles-right icon'></i> इस संधि में पहला वर्ण अपने बाद वाले वर्ण के वर्ग के पाँचवें वर्ण में बदल जाता है।"
    },
    {
        question: "'सम + मान' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "सम्मान", correct: true },
            { text: "सममान", correct: false },
            { text: "समन", correct: false },
            { text: "समान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'म्' के बाद 'म्' आने पर 'म्' का 'म्' ही रहता है, जो द्वित्व हो जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे परसवर्ण संधि का ही एक नियम माना जाता है।"
    },
    {
        question: "'उद् + लेख' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "उल्लेख", correct: true },
            { text: "उलेख", correct: false },
            { text: "उद्लेख", correct: false },
            { text: "उल्लख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उद्' के 'द्' के बाद 'ल' आने पर 'द्' का 'ल' हो जाता है, जिससे 'उल्लेख' बनता है।"
    },
    {
        question: "'सम् + गति' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "संगति", correct: true },
            { text: "सगति", correct: false },
            { text: "सम्गति", correct: false },
            { text: "संगती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'म्' के बाद 'ग्' आने पर 'म्' का 'ङ्' हो जाता है, जिससे 'संगति' बनता है।"
    },
    {
        question: "'सम् + धी' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "संधि", correct: true},
            { text: "संधी", correct: false},
            { text: "संद्धि", correct: false },
            { text: "सनधी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परसवर्ण संधि के नियम के अनुसार, जब 'म्' के बाद 'ध' (त-वर्ग का वर्ण) आता है, तो 'म्' का 'न्' (त-वर्ग का पाँचवाँ वर्ण) हो जाता है, जिसे अनुस्वार (ं) के रूप में लिखा जाता है। अतः, 'सम् + धि' से 'संधि' शब्द बनता है।"
    },
    {
        question: "'विद्वत् + लाभ' की संधि क्या होगी?",
        answers: shuffle([
            { text: "विद्वल्लाभ", correct: true },
            { text: "विद्तलाभ", correct: false },
            { text: "विद्वल्लभ", correct: false },
            { text: "विद्वतलाभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'त्' के बाद 'ल' आने पर 'त्' का 'ल' हो जाता है, जिससे 'विद्वल्लाभ' बनता है।"
    },
    {
        question: "'अहम् + कार' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "अहंकार", correct: true },
            { text: "अंहकार", correct: false },
            { text: "अहंअकार", correct: false },
            { text: "अहंर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'म्' के बाद 'क्' आने पर 'म्' का अनुस्वार हो जाता है (ङ्)।<br><br><i class='fa-solid fa-angles-right icon'></i> यह परसवर्ण संधि का ही एक नियम है।"
    },
    {
        question: "'शम् + कर' का संधि रूप है:",
        answers: shuffle([
            { text: "शंकर", correct: true },
            { text: "शङ्र", correct: false },
            { text: "संकर", correct: false },
            { text: "शकर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'म्' के बाद 'क' आने पर 'म्' का 'ङ्' हो जाता है (क-वर्ग का पाँचवाँ वर्ण), जिससे 'शङ्कर' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'शङ्कर' का ही एक रूप है।"
    },
    {
        question: "'उल्लेख' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "उल + लेख", correct: false },
            { text: "उत् + लेख", correct: true },
            { text: "उद + लेख", correct: false },
            { text: "उल + लख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उल्लेख' का सही संधि विच्छेद 'उत् + लेख' है, क्योंकि 'त्' के बाद 'ल' आने पर 'त्' का 'ल' हो जाता है।"
    },
    {
        question: "'सम् + पूर्ण' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "संपूर्ण", correct: true },
            { text: "संपूर्न", correct: false },
            { text: "समपूर्ण", correct: false },
            { text: "समपूर्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'म्' के बाद 'प्' आने पर 'म्' का अनुस्वार हो जाता है, जिससे 'संपूर्ण' बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह परसवर्ण संधि का नियम है।"
    },
    {
        question: "'परसवर्ण संधि' किस वर्ण से संबंधित है?",
        answers: shuffle([
            { text: "स्वर", correct: false },
            { text: "व्यंजन", correct: true },
            { text: "विसर्ग", correct: false },
            { text: "स्वर और व्यंजन दोनों", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> परसवर्ण संधि व्यंजन संधि का एक भेद है, जहाँ एक व्यंजन (विशेषतः 'म्' या 'त्') दूसरे व्यंजन के प्रभाव से बदल जाता है।"
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