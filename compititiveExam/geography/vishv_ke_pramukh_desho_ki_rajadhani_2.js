const questions = [ 
    {
        topHeading: "विश्व के प्रमुख देशों की राजधानियों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 81)."
    },
    {
        question: "रोमानिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "तिमिसोरा", correct: false },
            { text: "बुखारेस्ट", correct: true },
            { text: "क्लुज-नापोका", correct: false },
            { text: "इयासी", correct: false }
        ]),
    },
    {
        question: "बुल्गारिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "वार्ना", correct: false },
            { text: "सोफिया", correct: true },
            { text: "प्लोवदिव", correct: false },
            { text: "बर्गास", correct: false }
        ]),
    },
    {
        question: "अल्बानिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "श्कोदर", correct: false },
            { text: "तिराना", correct: true },
            { text: "एलबासन", correct: false },
            { text: "दुरी", correct: false }
        ]),
    },
    {
        question: "उत्तरी मैसेडोनिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "बिटोला", correct: false },
            { text: "कुमानोवो", correct: false },
            { text: "स्कोपजे", correct: true },
            { text: "प्रिलेप", correct: false }
        ]),
    },
    {
        question: "बोस्निया और हर्जेगोविना की राजधानी क्या है?",
        answers: shuffle([
            { text: "बनजा लुका", correct: false },
            { text: "तुजला", correct: false },
            { text: "ज़ेनिका", correct: false },
            { text: "सारायेवो", correct: true }
        ]),
    },
    {
        question: "लिथुआनिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "कानास", correct: false },
            { text: "विनियस", correct: true },
            { text: "क्लापेडा", correct: false },
            { text: "सियाउलियाइ", correct: false }
        ]),
    },
    {
        question: "लातविया की राजधानी क्या है?",
        answers: shuffle([
            { text: "डौगावपिल्स", correct: false },
            { text: "रीगा", correct: true },
            { text: "लिपजा", correct: false },
            { text: "जुरमाला", correct: false }
        ]),
    },
    {
        question: "एस्टोनिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "तेलिन", correct: true },
            { text: "तारतू", correct: false },
            { text: "नारवा", correct: false },
            { text: "पर्णू", correct: false }
        ]),
    },
    {
        question: "बेलारूस की राजधानी क्या है?",
        answers: shuffle([
            { text: "गोमेल", correct: false },
            { text: "मिन्स्क", correct: true },
            { text: "मोहिलेव", correct: false },
            { text: "विटेब्स्क", correct: false }
        ]),
    },
    {
        question: "मोल्दोवा की राजधानी क्या है?",
        answers: shuffle([
            { text: "बाल्टी", correct: false },
            { text: "त्रेरास्पोल", correct: false },
            { text: "किशिनाउ", correct: true },
            { text: "बेंडरी", correct: false }
        ]),
    },
    {
        question: "जॉर्जिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "बटुमी", correct: false },
            { text: "कुतैसी", correct: false },
            { text: "त्बिलिसी", correct: true },
            { text: "रुस्तवी", correct: false }
        ]),
    },
    {
        question: "आर्मेनिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "ग्युमरी", correct: false },
            { text: "वनडज़ोर", correct: false },
            { text: "येरेवन", correct: true },
            { text: "अर्मावीर", correct: false }
        ]),
    },
    {
        question: "अज़रबैजान की राजधानी क्या है?",
        answers: shuffle([
            { text: "गनजा", correct: false },
            { text: "सुम्गईत", correct: false },
            { text: "बाकू", correct: true },
            { text: "लेनकरान", correct: false }
        ]),
    },
    {
        question: "कजाकिस्तान की राजधानी क्या है?",
        answers: shuffle([
            { text: "अलमाटी", correct: false },
            { text: "नूर-सुल्तान (अस्ताना)", correct: true },
            { text: "शिमकेन्त", correct: false },
            { text: "करगांडा", correct: false }
        ]),
    },
    {
        question: "उज़्बेकिस्तान की राजधानी क्या है?",
        answers: shuffle([
            { text: "समरकंद", correct: false },
            { text: "बुखारा", correct: false },
            { text: "ताशकंद", correct: true },
            { text: "खिवा", correct: false }
        ]),
    },
    {
        question: "किर्गिस्तान की राजधानी क्या है?",
        answers: shuffle([
            { text: "ओश", correct: false },
            { text: "जलाल-अबाद", correct: false },
            { text: "बिश्केक", correct: true },
            { text: "कराकोल", correct: false }
        ]),
    },
    {
        question: "ताजिकिस्तान की राजधानी क्या है?",
        answers: shuffle([
            { text: "खुजंद", correct: false },
            { text: "कुलयाब", correct: false },
            { text: "दुशान्बे", correct: true },
            { text: "बोख्तर", correct: false }
        ]),
    },
    {
        question: "तुर्कमेनिस्तान की राजधानी क्या है?",
        answers: shuffle([
            { text: "तुर्कमेनाबाद", correct: false },
            { text: "अशगाबात", correct: true },
            { text: "डैगोगुज", correct: false },
            { text: "मेरी", correct: false }
        ]),
    },
    {
        question: "अफगानिस्तान की राजधानी क्या है?",
        answers: shuffle([
            { text: "कंधार", correct: false },
            { text: "हेरात", correct: false },
            { text: "काबुल", correct: true },
            { text: "मजार-ए-शरीफ", correct: false }
        ]),
    },
    {
        question: "नेपाल की राजधानी क्या है?",
        answers: shuffle([
            { text: "पोखरा", correct: false },
            { text: "विराटनगर", correct: false },
            { text: "ललितपुर", correct: false },
            { text: "काठमांडू", correct: true }
        ]),
    },
    {
        question: "भूटान की राजधानी क्या है?",
        answers: shuffle([
            { text: "फुंटशोलिंग", correct: false },
            { text: "थिम्पू", correct: true },
            { text: "पारो", correct: false },
            { text: "गेलेफू", correct: false }
        ]),
    },
    {
        question: "बांग्लादेश की राजधानी क्या है?",
        answers: shuffle([
            { text: "चिट्टागोंग", correct: false },
            { text: "खुलना", correct: false },
            { text: "ढाका", correct: true },
            { text: "राजशाही", correct: false }
        ]),
    },
    {
        question: "श्रीलंका की राजधानी क्या है?",
        answers: shuffle([
            { text: "कैंडी", correct: false },
            { text: "गाले", correct: false },
            { text: "कोलंबो", correct: false },
            { text: "श्री जयवर्धनेपुरा कोट्टे", correct: true }
        ]),
    },
    {
        question: "मालदीव की राजधानी क्या है?",
        answers: shuffle([
            { text: "अड्डू सिटी", correct: false },
            { text: "माले", correct: true },
            { text: "हुलहुमले", correct: false },
            { text: "फुवाह्मुलाह", correct: false }
        ]),
    },
    {
        question: "म्यांमार की राजधानी क्या है?",
        answers: shuffle([
            { text: "यांगून", correct: false },
            { text: "मांडले", correct: false },
            { text: "नेप्यीडॉ", correct: true },
            { text: "बागो", correct: false }
        ]),
    },
    {
        question: "सिंगापुर की राजधानी क्या है?",
        answers: shuffle([
            { text: "मरीना बे", correct: false },
            { text: "जुरांग", correct: false },
            { text: "सिंगापुर सिटी", correct: true },
            { text: "बूकित तिमाह", correct: false }
        ]),
    },
    {
        question: "लाओस की राजधानी क्या है?",
        answers: shuffle([
            { text: "लुआंग प्रबंग", correct: false },
            { text: "सावनखेथ", correct: false },
            { text: "वियनतियाने", correct: true },
            { text: "पाकसे", correct: false }
        ]),
    },
    {
        question: "कंबोडिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "सिएम रीप", correct: false },
            { text: "नोम पेन्ह", correct: true },
            { text: "बाटामबांग", correct: false },
            { text: "पोइपेट", correct: false }
        ]),
    },
    {
        question: "ब्रुनेई की राजधानी क्या है?",
        answers: shuffle([
            { text: "सेरिया", correct: false },
            { text: "बंदर सेरी बेगवान", correct: true },
            { text: "कुआला बेलाइत", correct: false },
            { text: "तुतोंग", correct: false }
        ]),
    },
    {
        question: "तिमोर-लेस्ते (पूर्वी तिमोर) की राजधानी क्या है?",
        answers: shuffle([
            { text: "बाऊकाउ", correct: false },
            { text: "डिली", correct: true },
            { text: "लिसाऊ", correct: false },
            { text: "मलिआना", correct: false }
        ]),
    },
    {
        question: "यमन की राजधानी क्या है?",
        answers: shuffle([
            { text: "अदन", correct: false },
            { text: "ताइज़", correct: false },
            { text: "सना", correct: true },
            { text: "हुदाइदा", correct: false }
        ]),
    },
    {
        question: "ओमान की राजधानी क्या है?",
        answers: shuffle([
            { text: "सलालाह", correct: false },
            { text: "सोहर", correct: false },
            { text: "मस्कट", correct: true },
            { text: "निजवा", correct: false }
        ]),
    },
    {
        question: "संयुक्त अरब अमीरात की राजधानी क्या है?",
        answers: shuffle([
            { text: "दुबई", correct: false },
            { text: "शारजाह", correct: false },
            { text: "अबू धाबी", correct: true },
            { text: "अल ऐन", correct: false }
        ]),
    },
    {
        question: "कतर की राजधानी क्या है?",
        answers: shuffle([
            { text: "अल खोर", correct: false },
            { text: "अल वक्रह", correct: false },
            { text: "दोहा", correct: true },
            { text: "लुसैल", correct: false }
        ]),
    },
    {
        question: "बहरीन की राजधानी क्या है?",
        answers: shuffle([
            { text: "मनामा", correct: true },
            { text: "मुहर्रक", correct: false },
            { text: "रिफ़ा", correct: false },
            { text: "ईसा टाउन", correct: false }
        ]),
    },
    {
        question: "कुवैत की राजधानी क्या है?",
        answers: shuffle([
            { text: "जाहरा", correct: false },
            { text: "हवली", correct: false },
            { text: "कुवैत सिटी", correct: true },
            { text: "फरवानिया", correct: false }
        ]),
    },
    {
        question: "इज़राइल की राजधानी क्या है?",
        answers: shuffle([
            { text: "तेल अवीव", correct: false },
            { text: "यरूशलेम", correct: true },
            { text: "हाइफ़ा", correct: false },
            { text: "एलात", correct: false }
        ]),
    },
    {
        question: "जॉर्डन की राजधानी क्या है?",
        answers: shuffle([
            { text: "इर्बिद", correct: false },
            { text: "ज़ारका", correct: false },
            { text: "अम्मान", correct: true },
            { text: "अक़ाबा", correct: false }
        ]),
    },
    {
        question: "लेबनान की राजधानी क्या है?",
        answers: shuffle([
            { text: "त्रिपुली", correct: false },
            { text: "टायर", correct: false },
            { text: "सीदोन", correct: false },
            { text: "बेरूत", correct: true }
        ]),
    },
    {
        question: "सीरिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "अलेप्पो", correct: false },
            { text: "दमिश्क", correct: true },
            { text: "होम्स", correct: false },
            { text: "लताकिया", correct: false }
        ]),
    },
    {
        question: "साइप्रस की राजधानी क्या है?",
        answers: shuffle([
            { text: "लिमासोल", correct: false },
            { text: "लार्नाका", correct: false },
            { text: "निकोसिया", correct: true },
            { text: "पफोस", correct: false }
        ]),
    },
    {
        question: "माली की राजधानी क्या है?",
        answers: shuffle([
            { text: "टिम्बकटू", correct: false },
            { text: "गैओ", correct: false },
            { text: "बमाको", correct: true },
            { text: "मोपती", correct: false }
        ]),
    },
    {
        question: "सेनेगल की राजधानी क्या है?",
        answers: shuffle([
            { text: "थिएस", correct: false },
            { text: "जिगुइंचोर", correct: false },
            { text: "डकार", correct: true },
            { text: "सेंट-लुइस", correct: false }
        ]),
    },
    {
        question: "आइवरी कोस्ट (कोटे डी'आईवोइर) की राजधानी क्या है?",
        answers: shuffle([
            { text: "आबिदजान", correct: false },
            { text: "यामोसुक्रो", correct: true },
            { text: "बुआके", correct: false },
            { text: "दाओला", correct: false }
        ]),
    },
    {
        question: "घाना की राजधानी क्या है?",
        answers: shuffle([
            { text: "कुमासी", correct: false },
            { text: "अकरा", correct: true },
            { text: "तमाले", correct: false },
            { text: "सेकोंदी-तकोरदी", correct: false }
        ]),
    },
    {
        question: "नाइजीरिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "लागोस", correct: false },
            { text: "कानो", correct: false },
            { text: "अबुजा", correct: true },
            { text: "इबादन", correct: false }
        ]),
    },
    {
        question: "कैमरून की राजधानी क्या है?",
        answers: shuffle([
            { text: "डौआला", correct: false },
            { text: "योऊंडे", correct: true },
            { text: "बाफुसाम", correct: false },
            { text: "गारोउआ", correct: false }
        ]),
    },
    {
        question: "कांगो लोकतांत्रिक गणराज्य (DRC) की राजधानी क्या है?",
        answers: shuffle([
            { text: "लुबुम्बाशी", correct: false },
            { text: "गोमा", correct: false },
            { text: "किन्शासा", correct: true },
            { text: "किशनगानी", correct: false }
        ]),
    },
    {
        question: "केन्या की राजधानी क्या है?",
        answers: shuffle([
            { text: "मोम्बासा", correct: false },
            { text: "किसुमु", correct: false },
            { text: "नैरोबी", correct: true },
            { text: "नकुरू", correct: false }
        ]),
    },
    {
        question: "तंजानिया की राजधानी क्या है?",
        answers: shuffle([
            { text: "दार-एस-सलाम", correct: false },
            { text: "डोडोमा", correct: true },
            { text: "ज़ांज़ीबार", correct: false },
            { text: "अरुशा", correct: false }
        ]),
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