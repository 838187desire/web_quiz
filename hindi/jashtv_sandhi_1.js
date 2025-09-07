const questions = [
    {
        topHeading: "जश्त्व संधि पर आधारित 30 बहुविकल्पीय प्रश्न (quiz_no.13)"
    },
    {
        question: "'जगत् + ईश' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "जगदीश", correct: true },
            { text: "जगतीश", correct: false },
            { text: "जगदिश", correct: false },
            { text: "जगतीस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जश्त्व संधि के नियम के अनुसार, जब किसी वर्ग के पहले वर्ण (क्, च्, ट्, त्, प्) के बाद किसी वर्ग का तीसरा (ग्, ज्, ड्, द्, ब्) या चौथा वर्ण (घ्, झ्, ढ्, ध्, भ्), या य, र, ल, व, या कोई स्वर आए, तो पहला वर्ण अपने ही वर्ग के तीसरे वर्ण में बदल जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'जगत्' के 'त्' के बाद 'ईश' का 'ई' स्वर आने पर 'त्' का अपने वर्ग (त-वर्ग) के तीसरे वर्ण 'द्' में परिवर्तन हो जाता है, जिससे 'जगदीश' बनता है।"
    },
    {
        question: "'वाक् + ईश' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "वागीश", correct: true },
            { text: "वाकेश", correct: false },
            { text: "वागेश", correct: false },
            { text: "वागश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाक्' के 'क्' के बाद 'ईश' का 'ई' स्वर आने पर 'क्' का अपने वर्ग (क-वर्ग) के तीसरे वर्ण 'ग्' में परिवर्तन हो जाता है, जिससे 'वागीश' बनता है।"
    },
    {
        question: "निम्नलिखित में से कौन सा शब्द जश्त्व संधि का उदाहरण नहीं है?",
        answers: shuffle([
            { text: "दिगंबर", correct: false },
            { text: "अब्ज", correct: false },
            { text: "दिग्गज", correct: false },
            { text: "वाङ्मय", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाङ्मय' शब्द 'वाक् + मय' से मिलकर बना है, जो अनुनासिक संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी शब्द जश्त्व संधि के उदाहरण हैं।"
    },
    {
        question: "'दिक् + गज' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "दिग्गज़", correct: false },
            { text: "दिग्गज", correct: true },
            { text: "दिकगज", correct: false },
            { text: "दिगगज़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिक्' के 'क्' के बाद 'गज' का 'ग्' (तीसरा वर्ण) आने पर 'क्' का अपने ही वर्ग के तीसरे वर्ण 'ग्' में परिवर्तन हो जाता है, जिससे 'दिग्गज' बनता है।"
    },
    {
        question: "'अप् + ज' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "अपज", correct: false },
            { text: "अब्ज", correct: true },
            { text: "अप्ज", correct: false },
            { text: "अब्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अप्' के 'प्' के बाद 'ज' का 'ज्' (तीसरा वर्ण) आने पर 'प्' का अपने वर्ग (प-वर्ग) के तीसरे वर्ण 'ब्' में परिवर्तन हो जाता है, जिससे 'अब्ज' बनता है।"
    },
    {
        question: "किस विकल्प में 'जश्त्व संधि' का सही उदाहरण है?",
        answers: shuffle([
            { text: "उत् + हार = उद्धार", correct: false },
            { text: "तत् + लीन = तल्लीन", correct: false },
            { text: "अच् + अंत = अजंत", correct: true },
            { text: "मनः + बल = मनोबल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अच्' के 'च्' के बाद 'अंत' का 'अ' स्वर आने पर 'च्' का अपने ही वर्ग के तीसरे वर्ण 'ज्' में परिवर्तन हो गया है, जो जश्त्व संधि का नियम है।"
    },
    {
        question: "'षट् + आनन' का संधि रूप क्या है?",
        answers: shuffle([
            { text: "षडानन", correct: true },
            { text: "षटानन", correct: false },
            { text: "षडानन्", correct: false },
            { text: "षट्आनन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'षट्' के 'ट्' के बाद 'आनन' का 'आ' स्वर आने पर 'ट्' का अपने वर्ग (ट-वर्ग) के तीसरे वर्ण 'ड्' में परिवर्तन हो जाता है, जिससे 'षडानन' बनता है।"
    },
    {
        question: "'दिक् + अंत' के मेल से कौन सा शब्द बनता है?",
        answers: shuffle([
            { text: "दिकांत", correct: false },
            { text: "दिगंत", correct: true },
            { text: "दिकंत", correct: false },
            { text: "दिगान्त", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिक्' के 'क्' के बाद 'अंत' का 'अ' स्वर आने पर 'क्' का अपने वर्ग (क-वर्ग) के तीसरे वर्ण 'ग्' में परिवर्तन हो जाता है, जिससे 'दिगंत' बनता है।"
    },
    {
        question: "'वाक् + जाल' की संधि है:",
        answers: shuffle([
            { text: "वाग्जाल", correct: true },
            { text: "वाक्जाल", correct: false },
            { text: "वाग्जल", correct: false },
            { text: "वागज्वाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाक्' के 'क्' के बाद 'जाल' का 'ज्' (तीसरा वर्ण) आने पर 'क्' का अपने वर्ग (क-वर्ग) के तीसरे वर्ण 'ग्' में परिवर्तन हो जाता है, जिससे 'वाग्जाल' बनता है।"
    },
    {
        question: "'सद्भावना' का सही संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "सद् + भावना", correct: false },
            { text: "सत + भावना", correct: true },
            { text: "स + भावना", correct: false },
            { text: "सद + भावना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सद्भावना' का सही संधि विच्छेद 'सत + भावना' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'सत' के 'त्' के बाद 'भावना' का 'भ' (चौथा वर्ण) आने पर 'त्' का अपने वर्ग के तीसरे वर्ण 'द्' में परिवर्तन हो जाता है।"
    },
    {
        question: "'वाक् + दान' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "वाग्दान", correct: true },
            { text: "वाकदान", correct: false },
            { text: "वाग्दयन", correct: false },
            { text: "वाकदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाक्' के 'क्' के बाद 'दान' का 'द्' (तीसरा वर्ण) आने पर 'क्' का 'ग्' में परिवर्तन हो जाता है, जिससे 'वाग्दान' बनता है।"
    },
    {
        question: "'अजंत' में कौन सी संधि है?",
        answers: shuffle([
            { text: "यण संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "जश्त्व संधि", correct: true },
            { text: "अनुस्वार संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अजंत' का संधि विच्छेद 'अच् + अंत' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'अच्' के 'च्' का 'ज्' में परिवर्तन हुआ है, जो जश्त्व संधि का नियम है।"
    },
    {
        question: "'वागीश' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "वाक् + ईश", correct: true },
            { text: "वाग + ईश", correct: false },
            { text: "वग + ईश", correct: false },
            { text: "वाक् + इश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वागीश' का सही संधि विच्छेद 'वाक् + ईश' है, क्योंकि 'क्' के बाद 'ई' आने पर 'क्' का 'ग्' हो जाता है।"
    },
    {
        question: "'षडानन' में कौन सी संधि है?",
        answers: shuffle([
            { text: "जश्त्व संधि", correct: true },
            { text: "व्यंजन संधि", correct: false },
            { text: "दीर्घ संधि", correct: false },
            { text: "अयादि संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'षडानन' का संधि विच्छेद 'षट् + आनन' है।<br><br><i class='fa-solid fa-angles-right icon'></i> यहाँ 'ट्' का 'ड्' में परिवर्तन हुआ है, जो जश्त्व संधि का नियम है।"
    },
    {
        question: "'दिक् + दर्शन' का संधि रूप क्या होगा?",
        answers: shuffle([
            { text: "दिगदर्शन", correct: false },
            { text: "दिकदर्शन", correct: false },
            { text: "दिग्दर्शन", correct: true },
            { text: "दिग्दर्न", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिक्' के 'क्' के बाद 'दर्शन' का 'द्' (तीसरा वर्ण) आने पर 'क्' का अपने ही वर्ग के तीसरे वर्ण 'ग्' में परिवर्तन हो जाता है, जिससे 'दिग्दर्शन' बनता है।"
    },
    {
        question: "किस विकल्प में संधि विच्छेद सही नहीं है?",
        answers: shuffle([
            { text: "वागीश = वाक् + ईश", correct: false },
            { text: "दिग्गज = दिक् + गज", correct: false },
            { text: "अब्ज = अप् + ज", correct: false },
            { text: "सद्भावना = सद् + भावना", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सद्भावना' का सही संधि विच्छेद 'सत् + भावना' है, न कि 'सद् + भावना'।"
    },
    {
        question: "'उद्गम' का संधि विच्छेद क्या है?",
        answers: shuffle([
            { text: "उद + गम", correct: false },
            { text: "उत् + गम", correct: true },
            { text: "उद्ग + म", correct: false },
            { text: "उ + गम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उत्' के 'त्' के बाद 'गम' का 'ग्' (तीसरा वर्ण) आने पर 'त्' का 'द्' में परिवर्तन हो जाता है, जिससे 'उद्गम' बनता है।"
    },
    {
        question: "'अच् + अंत' की संधि से क्या शब्द बनेगा?",
        answers: shuffle([
            { text: "अजंत", correct: true },
            { text: "अच्चंत", correct: false },
            { text: "अचंत", correct: false },
            { text: "अज्जंत", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अच्' के 'च्' के बाद 'अंत' का 'अ' स्वर आने पर 'च्' का 'ज्' में परिवर्तन हो जाता है, जिससे 'अजंत' बनता है।"
    },
    {
        question: "'षट् + दर्शन' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "षद्दर्शन", correct: false },
            { text: "षडदर्न", correct: false },
            { text: "षटदर्शन", correct: false },
            { text: "षड्दर्शन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'षट्' के 'ट्' के बाद 'दर्शन' का 'द्' (तीसरा वर्ण) आने पर 'ट्' का 'ड्' में परिवर्तन हो जाता है, जिससे 'षड्दर्शन' बनता है।"
    },
    {
        question: "'सत् + आचार' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "सदाचार", correct: true },
            { text: "सताचार", correct: false },
            { text: "सद्आचार", correct: false },
            { text: "सदाचर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्' के 'त्' के बाद 'आचार' का 'आ' स्वर आने पर 'त्' का 'द्' में परिवर्तन हो जाता है, जिससे 'सदाचार' बनता है।"
    },
    {
        question: "'दिक् + विजय' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "दिग्विजय", correct: true },
            { text: "दिक्कविजय", correct: false },
            { text: "दिग्वजय", correct: false },
            { text: "दिग्गविजय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिक्' के 'क्' के बाद 'विजय' का 'व्' (घोष वर्ण) आने पर 'क्' का 'ग्' में परिवर्तन हो जाता है, जिससे 'दिग्विजय' बनता है।"
    },
    {
        question: "'वाक् + दान' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "वाग्दान", correct: true },
            { text: "वाकदान", correct: false },
            { text: "वाग्दयन", correct: false },
            { text: "वाकदन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वाक्' के 'क्' के बाद 'दान' का 'द्' (तीसरा वर्ण) आने पर 'क्' का 'ग्' में परिवर्तन हो जाता है, जिससे 'वाग्दान' बनता है।"
    },
    {
        question: "'सत् + धर्म' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "सद्धर्म", correct: true },
            { text: "सतधर्म", correct: false },
            { text: "सधधर्म", correct: false },
            { text: "सदधर्म", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सत्' के 'त्' के बाद 'धर्म' का 'ध' (चौथा वर्ण) आने पर 'त्' का अपने वर्ग के तीसरे वर्ण 'द्' में परिवर्तन हो जाता है, जिससे 'सद्धर्म' बनता है।"
    },
    {
        question: "'सदैव' में कौन सी संधि है?",
        answers: shuffle([
            { text: "दीर्घ संधि", correct: false },
            { text: "गुण संधि", correct: false },
            { text: "वृद्धि संधि", correct: true },
            { text: "जश्त्व संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सदैव' का संधि विच्छेद 'सदा + एव' है, जो वृद्धि संधि का उदाहरण है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह जश्त्व संधि का उदाहरण नहीं है।"
    },
    {
        question: "'षडानन' का सही संधि विच्छेद है:",
        answers: shuffle([
            { text: "षट + आनन", correct: false },
            { text: "षड् + आनन", correct: false },
            { text: "षट् + आनन", correct: true },
            { text: "षड + आनन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'षट्' के 'ट्' के बाद 'आनन' का 'आ' स्वर आने पर 'ट्' का 'ड्' में परिवर्तन होता है, जिससे 'षडानन' बनता है।"
    },
    {
        question: "'अच् + आदि' की संधि से बनने वाला शब्द है:",
        answers: shuffle([
            { text: "अजादि", correct: true },
            { text: "अचादि", correct: false },
            { text: "अज्यादि", correct: false },
            { text: "अजआदि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अच्' के 'च्' के बाद 'आदि' का 'आ' स्वर आने पर 'च्' का 'ज्' में परिवर्तन होता है, जिससे 'अजादि' बनता है।"
    },
    {
        question: "'जश्त्व संधि' का दूसरा नाम क्या है?",
        answers: shuffle([
            { text: "प्रथम वर्ण का तृतीय वर्ण में परिवर्तन", correct: true },
            { text: "अनुनासिक संधि", correct: false },
            { text: "विसर्ग संधि", correct: false },
            { text: "स्वर संधि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जश्त्व संधि का मुख्य नियम यही है कि वर्ग का पहला वर्ण (क, च, ट, त, प) अपने ही वर्ग के तीसरे वर्ण (ग, ज, ड, द, ब) में बदल जाता है।"
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