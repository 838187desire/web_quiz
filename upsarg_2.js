const questions = [
    {
        topHeading: "उपसर्ग  पर आधारित 47 बहुविकल्पीय प्रश्न part 2 (quiz_no.22)"
    },
    {
        question: "'निबंध' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: true },
            { text: "निब", correct: false },
            { text: "निः", correct: false },
            { text: "न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निबंध' शब्द में 'नि' (पूर्णता) उपसर्ग है, जिसका अर्थ 'भली-भाँति बंधा हुआ' होता है।"
    },
    {
        question: "'दुराग्रह' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुर्", correct: true },
            { text: "दुस्", correct: false },
            { text: "दुरा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुराग्रह' में 'दुर्' (बुरा) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'दुर् + आग्रह' से 'दुराग्रह' बनता है।"
    },
    {
        question: "'सुपात्र' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "सु", correct: true },
            { text: "सुपा", correct: false },
            { text: "स", correct: false },
            { text: "सुः", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुपात्र' में 'सु' (अच्छा) उपसर्ग है, जिसका अर्थ 'अच्छा पात्र' होता है।"
    },
    {
        question: "'परिवर्तन' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "परि", correct: true },
            { text: "पर", correct: false },
            { text: "प्रति", correct: false },
            { text: "परव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिवर्तन' में 'परि' (चारों ओर) उपसर्ग है।"
    },
    {
        question: "'अंतरात्मा' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अन्तर", correct: false },
            { text: "अन्तर्", correct: true },
            { text: "अन्त", correct: false },
            { text: "अंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंतरात्मा' में 'अन्तर्' (भीतर) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अन्तर् + आत्मा' से 'अंतरात्मा' बनता है।"
    },
    {
        question: "'उपहार' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "उप", correct: true },
            { text: "उपा", correct: false },
            { text: "उ", correct: false },
            { text: "उपह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपहार' में 'उप' (समीप) उपसर्ग है, जिसका अर्थ 'किसी के पास' या 'समीप' होता है।"
    },
    {
        question: "'प्रतिकूल' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "प्रति", correct: true },
            { text: "प्र", correct: false },
            { text: "प्रा", correct: false },
            { text: "कूल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रतिकूल' में 'प्रति' (विरुद्ध) उपसर्ग है, जिसका अर्थ 'कूल के विरुद्ध' होता है।"
    },
    {
        question: "'उपवन' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "उप", correct: true },
            { text: "उ", correct: false },
            { text: "वन", correct: false },
            { text: "उपव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपवन' में 'उप' (समीप) उपसर्ग है।"
    },
    {
        question: "'सुगम' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "स", correct: false },
            { text: "सु", correct: true },
            { text: "सुग", correct: false },
            { text: "सम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुगम' में 'सु' (अच्छा) उपसर्ग है, जिसका अर्थ 'आसानी से जाया जा सकने वाला' होता है।"
    },
    {
        question: "'अतिक्रमण' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अति", correct: true },
            { text: "अतिक", correct: false },
            { text: "अती", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अतिक्रमण' में 'अति' (अधिकता/ऊपर) उपसर्ग है।"
    },
    {
        question: "'अभ्यागत' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अभ्य", correct: false },
            { text: "अभि", correct: true },
            { text: "आ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभ्यागत' में 'अभि' (सामने) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अभि + आगत' से 'अभ्यागत' बनता है।"
    },
    {
        question: "'अधिकार' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अधि", correct: true },
            { text: "अध", correct: false },
            { text: "अधिका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधिकार' में 'अधि' (ऊपर/श्रेष्ठ) उपसर्ग है।"
    },
    {
        question: "'दुर्दशा' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुर्", correct: true },
            { text: "दुस्", correct: false },
            { text: "दशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुर्दशा' में 'दुर्' (बुरी) उपसर्ग है।"
    },
    {
        question: "'परिकल्पना' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "पर", correct: false },
            { text: "परि", correct: true },
            { text: "परा", correct: false },
            { text: "प्रति", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिकल्पना' में 'परि' (चारों ओर) उपसर्ग है।"
    },
    {
        question: "'अंतरराष्ट्रीय' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अंतर", correct: false },
            { text: "अन्तर्", correct: true },
            { text: "अंतरा", correct: false },
            { text: "अ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंतरराष्ट्रीय' में 'अन्तर्' (भीतर) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अन्तर् + राष्ट्रीय' से 'अंतरराष्ट्रीय' बनता है।"
    },
    {
        question: "'उपमान' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "उप", correct: true },
            { text: "उ", correct: false },
            { text: "उपा", correct: false },
            { text: "मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपमान' में 'उप' (समीप) उपसर्ग है, जिसका अर्थ 'समीपता' या 'तुलना' होता है।"
    },
    {
        question: "'सुशोभित' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "सु", correct: true },
            { text: "शो", correct: false },
            { text: "शुभ", correct: false },
            { text: "स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुशोभित' में 'सु' (शोभा) उपसर्ग है।"
    },
    {
        question: "'अत्यंत' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अति", correct: true },
            { text: "अत्य", correct: false },
            { text: "अत्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अत्यंत' में 'अति' (अधिक) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अति + अंत' से 'अत्यंत' बनता है।"
    },
    {
        question: "'अभिमान' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अभि", correct: true },
            { text: "अभ", correct: false },
            { text: "अभी", correct: false },
            { text: "मान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिमान' में 'अभि' (सामने) उपसर्ग है।"
    },
    {
        question: "'अधिकार' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अधि", correct: true },
            { text: "अधिक", correct: false },
            { text: "का", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधिकार' में 'अधि' (ऊपर) उपसर्ग है।"
    },
    {
        question: "'निग्रह' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: true },
            { text: "निः", correct: false },
            { text: "निर", correct: false },
            { text: "निग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निग्रह' में 'नि' (पूर्णता) उपसर्ग है।"
    },
    {
        question: "'दुस्साहस' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुर्", correct: false },
            { text: "दुस्", correct: true },
            { text: "साह", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुस्साहस' में 'दुस्' (बुरा) उपसर्ग है।"
    },
    {
        question: "'सुविचार' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "सु", correct: true },
            { text: "सुवि", correct: false },
            { text: "स", correct: false },
            { text: "वि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुविचार' में 'सु' (अच्छा) उपसर्ग है।"
    },
    {
        question: "'परिवेश' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "परि", correct: true },
            { text: "पर", correct: false },
            { text: "प्रति", correct: false },
            { text: "परा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिवेश' में 'परि' (चारों ओर) उपसर्ग है।"
    },
    {
        question: "'अतिवृष्टि' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अति", correct: true },
            { text: "अव", correct: false },
            { text: "अत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अतिवृष्टि' में 'अति' (अधिकता) उपसर्ग है।"
    },
    {
        question: "'अभिनव' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अभि", correct: true },
            { text: "अ", correct: false },
            { text: "अभिन", correct: false },
            { text: "नव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिनव' में 'अभि' (सामने/ओर) उपसर्ग है।"
    },
    {
        question: "'अध्यापक' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अध्य", correct: false },
            { text: "अधि", correct: true },
            { text: "आपक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्यापक' में 'अधि' (प्रधान) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अधि + आपक' से 'अध्यापक' बनता है।"
    },
    {
        question: "'अधिवेशन' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अधि", correct: true },
            { text: "अध", correct: false },
            { text: "आद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधिवेशन' में 'अधि' (ऊपर/श्रेष्ठ) उपसर्ग है।"
    },
    {
        question: "'निर्धन' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: false },
            { text: "निः", correct: false },
            { text: "निर", correct: false },
            { text: "निर्", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निर्धन' में 'निर्' (बिना) उपसर्ग है।"
    },
    {
        question: "'दुश्चक्र' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुस्", correct: true },
            { text: "दुर्", correct: false },
            { text: "दुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुश्चक्र' में 'दुस्' (बुरा) उपसर्ग है।"
    },
    {
        question: "'परिक्रमा' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "परि", correct: true },
            { text: "पर", correct: false },
            { text: "प्रति", correct: false },
            { text: "कमा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिक्रमा' में 'परि' (चारों ओर) उपसर्ग है।"
    },
    {
        question: "'अंतरिम' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अन्त", correct: false },
            { text: "अन्तर", correct: true },
            { text: "अंतरा", correct: false },
            { text: "अ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अंतरिम' में 'अन्तर' (भीतरी) उपसर्ग है।"
    },
    {
        question: "'अध्ययन' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अधि", correct: true },
            { text: "अध्य", correct: false },
            { text: "अध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अध्ययन' में 'अधि' (ऊपर) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अधि + अयन' से 'अध्ययन' बनता है।"
    },
    {
        question: "'उपदेश' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "उप", correct: true },
            { text: "उपद", correct: false },
            { text: "उ", correct: false },
            { text: "उपे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपदेश' में 'उप' (समीप) उपसर्ग है।"
    },
    {
        question: "'प्रतिध्वनि' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "प्रति", correct: true },
            { text: "प्र", correct: false },
            { text: "प्रा", correct: false },
            { text: "प्रतिध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रतिध्वनि' में 'प्रति' (हर एक) उपसर्ग है।"
    },
    {
        question: "'निर्मम' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: false },
            { text: "निः", correct: false },
            { text: "निर", correct: false },
            { text: "निर्", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निर्मम' में 'निर्' (बिना) उपसर्ग है।"
    },
    {
        question: "'दुर्व्यवस्था' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुर्", correct: true },
            { text: "दुस्", correct: false },
            { text: "दुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुर्व्यवस्था' में 'दुर्' (बुरा) उपसर्ग है।"
    },
    {
        question: "'अत्युक्ति' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अति", correct: true },
            { text: "अत्य", correct: false },
            { text: "अत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अत्युक्ति' में 'अति' (अधिक) उपसर्ग है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'अति + उक्ति' से 'अत्युक्ति' बनता है।"
    },
    {
        question: "'अधिनायक' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अधि", correct: true },
            { text: "अध", correct: false },
            { text: "नायक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अधिनायक' में 'अधि' (प्रधान) उपसर्ग है।"
    },
    {
        question: "'अभियोग' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अभि", correct: true },
            { text: "अभी", correct: false },
            { text: "योग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभियोग' में 'अभि' (सामने) उपसर्ग है।"
    },
    {
        question: "'दुश्चरित्र' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "दु", correct: false },
            { text: "दुस्", correct: true },
            { text: "दुर्", correct: false },
            { text: "दुश्च", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुश्चरित्र' में 'दुस्' (बुरा) उपसर्ग है।"
    },
    {
        question: "'उपराष्ट्रपति' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "उप", correct: true },
            { text: "उपरा", correct: false },
            { text: "उ", correct: false },
            { text: "राष्ट्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उपराष्ट्रपति' में 'उप' (छोटा/सहायक) उपसर्ग है।"
    },
    {
        question: "'निषेध' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "नि", correct: true },
            { text: "निः", correct: false },
            { text: "निष", correct: false },
            { text: "निषे", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निषेध' में 'नि' (पूर्णता) उपसर्ग है।"
    },
    {
        question: "'सुशोभित' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "सु", correct: true },
            { text: "शो", correct: false },
            { text: "शोभा", correct: false },
            { text: "स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुशोभित' में 'सु' (शोभा) उपसर्ग है।"
    },
    {
        question: "'अभिभावक' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अभि", correct: true },
            { text: "भा", correct: false },
            { text: "अभिभ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अभिभावक' में 'अभि' (सामने) उपसर्ग है।"
    },
    {
        question: "'अतिसार' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "अति", correct: true },
            { text: "अतिस", correct: false },
            { text: "सा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अतिसार' में 'अति' (अधिक) उपसर्ग है।"
    },
    {
        question: "'परिवेश' में कौन सा उपसर्ग है?",
        answers: shuffle([
            { text: "पर", correct: false },
            { text: "परि", correct: true },
            { text: "प्रति", correct: false },
            { text: "परव", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'परिवेश' में 'परि' (चारों ओर) उपसर्ग है।"
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