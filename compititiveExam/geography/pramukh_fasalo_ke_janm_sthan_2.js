const questions = [ 
  {
      topHeading: "प्रमुख फसलों के जन्म स्थान पर आधारित 50 (MCQs) part 2  (quiz_no. 57)"
  },
    {
        question: "मेथी का मूल स्थान कौनसा क्षेत्र है?",
        answers: shuffle([
            { text: "दक्षिण-पूर्व यूरोप", correct: true },
            { text: "चीन", correct: false },
            { text: "भारत", correct: false },
            { text: "अफ्रीका", correct: false }
        ])
    },
    {
        question: "सौंफ का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "भूमध्यसागरीय क्षेत्र", correct: true },
            { text: "मध्य एशिया", correct: false },
            { text: "चीन", correct: false }
        ])
    },
    {
        question: "सरसों का मूल स्थान कहाँ है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "भारत", correct: false },
            { text: "भूमध्यसागरीय क्षेत्र", correct: true },
            { text: "यूरोप", correct: false }
        ])
    },
    {
        question: "सूरजमुखी का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "दक्षिण अमेरिका", correct: false },
            { text: "उत्तरी अमेरिका", correct: true },
            { text: "चीन", correct: false },
            { text: "अफ्रीका", correct: false }
        ])
    },
    {
        question: "जैतून (Olive) का मूल स्थान कौनसा क्षेत्र है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "भूमध्यसागरीय क्षेत्र", correct: true },
            { text: "अफ्रीका", correct: false },
            { text: "दक्षिण अमेरिका", correct: false }
        ])
    },
    {
        question: "अंजीर का मूल स्थान कौनसा क्षेत्र है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "भूमध्यसागरीय क्षेत्र", correct: true },
            { text: "भारत", correct: false },
            { text: "चीन", correct: false }
        ])
    },
    {
        question: "खजूर का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "मध्य-पूर्व (मेसोपोटामिया)", correct: true },
            { text: "अफ्रीका", correct: false },
            { text: "चीन", correct: false },
            { text: "भारत", correct: false }
        ])
    },
    {
        question: "शकरकंद का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "चीन", correct: false },
            { text: "अफ्रीका", correct: false }
        ])
    },
    {
        question: "पपीता का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "मेक्सिको", correct: true },
            { text: "चीन", correct: false },
            { text: "अफ्रीका", correct: false }
        ])
    },
    {
        question: "कद्दू का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "भारत", correct: false },
            { text: "उत्तरी अमेरिका", correct: true },
            { text: "अफ्रीका", correct: false }
        ])
    },
    {
        question: "टमाटर का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "पेरू", correct: false },
            { text: "मेक्सिको", correct: true },
            { text: "ब्राजील", correct: false },
            { text: "इटली", correct: false }
        ])
    },
    {
        question: "मिर्च का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: false },
            { text: "मेक्सिको", correct: true },
            { text: "अफ्रीका", correct: false }
        ])
    },
    {
        question: "शलजम का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "यूरोप", correct: true },
            { text: "मध्य एशिया", correct: false },
            { text: "भारत", correct: false }
        ])
    },
    {
        question: "चुकंदर का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "भूमध्यसागरीय क्षेत्र", correct: true },
            { text: "मध्य एशिया", correct: false },
            { text: "उत्तरी अमेरिका", correct: false }
        ])
    },
    {
        question: "गाजर का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "अफगानिस्तान", correct: true },
            { text: "चीन", correct: false },
            { text: "भारत", correct: false }
        ])
    },
    {
        question: "प्याज का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "यूरोप", correct: false },
            { text: "मध्य एशिया", correct: true },
            { text: "भारत", correct: false },
            { text: "चीन", correct: false }
        ])
    },
    {
        question: "लहसुन का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "मिस्र", correct: false },
            { text: "ईरान", correct: false },
            { text: "मध्य एशिया", correct: true },
            { text: "चीन", correct: false }
        ])
    },
    {
        question: "जौ का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "दक्षिण-पश्चिम एशिया", correct: true },
            { text: "यूरोप", correct: false },
            { text: "अफ्रीका", correct: false }
        ])
    },
    {
        question: "राई का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "यूरोप", correct: true },
            { text: "मध्य एशिया", correct: false },
            { text: "चीन", correct: false },
            { text: "भारत", correct: false }
        ])
    },
    {
        question: "जई (Oats) का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "यूरोप", correct: true },
            { text: "मध्य एशिया", correct: false },
            { text: "चीन", correct: false },
            { text: "अमेरिका", correct: false }
        ])
    },
    {
        question: "मूँगफली का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "चीन", correct: false },
            { text: "दक्षिण अमेरिका", correct: true },
            { text: "अफ्रीका", correct: false },
            { text: "भारत", correct: false }
        ])
    },
    {
        question: "चना का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "दक्षिण-पश्चिम एशिया", correct: true },
            { text: "भारत", correct: false },
            { text: "चीन", correct: false },
            { text: "अफ्रीका", correct: false }
        ])
    },
    {
        question: "मसूर (Lentil) का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: false },
            { text: "दक्षिण-पश्चिम एशिया", correct: true },
            { text: "यूरोप", correct: false }
        ])
    },
    {
        question: "मटर का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "अफ्रीका", correct: false },
            { text: "भूमध्यसागरीय क्षेत्र", correct: true },
            { text: "दक्षिण-पूर्व एशिया", correct: false },
            { text: "चीन", correct: false }
        ])
    },
    {
        question: "सोयाबीन का जन्मस्थान कहाँ है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "जापान", correct: false },
            { text: "अमेरिका", correct: false }
        ])
    },
      {
        question: "गन्नाकाजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भारत", correct: true },
          { text: "ब्राजील", correct: false },
          { text: "मेक्सिको", correct: false },
          { text: "मिस्र", correct: false },
        ]),
      },
      {
        question: "कपासकाजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "चीन", correct: false },
          { text: "मिस्र", correct: false },
          { text: "भारत", correct: true },
          { text: "अमेरिका", correct: false },
        ]),
      },
      {
        question: "जूटकाजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "चीन", correct: false },
          { text: "ब्राजील", correct: false },
          { text: "भारतऔरबांग्लादेश", correct: true },
          { text: "अफ्रीका", correct: false },
        ]),
      },
      {
        question: "पटसन (Flax) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भूमध्यसागरीय क्षेत्र", correct: true },
          { text: "भारत", correct: false },
          { text: "चीन", correct: false },
          { text: "अफ्रीका", correct: false },
        ]),
      },
      {
        question: "सन (Hemp) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "मध्य एशिया", correct: true },
          { text: "भारत", correct: false },
          { text: "चीन", correct: false },
          { text: "यूरोप", correct: false },
        ]),
      },
      {
        question: "चायकाजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भारत", correct: false },
          { text: "चीन", correct: true },
          { text: "श्रीलंका", correct: false },
          { text: "जापान", correct: false },
        ]),
      },
      {
        question: "कॉफीकाजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "ब्राजील", correct: false },
          { text: "इथियोपिया", correct: true },
          { text: "भारत", correct: false },
          { text: "वियतनाम", correct: false },
        ]),
      },
      {
        question: "कोको (Cocoa) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "अफ्रीका", correct: false },
          { text: "दक्षिणअमेरिका (अमेज़ॅन बेसिन)", correct: true },
          { text: "मेक्सिको", correct: false },
          { text: "भारत", correct: false },
        ]),
      },
      {
        question: "रबड़काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "दक्षिण-पूर्वएशिया", correct: false },
          { text: "ब्राजील", correct: true },
          { text: "अफ्रीका", correct: false },
          { text: "मध्यअमेरिका", correct: false },
        ]),
      },
      {
        question: "सिनकोना (Cinchona) का जन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "दक्षिण अमेरिका (एंडिजपर्वत)", correct: true },
          { text: "भारत", correct: false },
          { text: "अफ्रीका", correct: false },
          { text: "इंडोनेशिया", correct: false },
        ]),
      },
      {
        question: "हींग (Asafoetida) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भारत", correct: false },
          { text: "चीन", correct: false },
          { text: "ईरानऔरअफगानिस्तान", correct: true },
          { text: "यूरोप", correct: false },
        ]),
      },
      {
        question: "जायफल (Nutmeg) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भारत", correct: false },
          { text: "इंडोनेशिया (मलूकद्वीप)", correct: true },
          { text: "अफ्रीका", correct: false },
          { text: "ब्राजील", correct: false },
        ]),
      },
      {
        question: "लौंग (Clove) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भारत", correct: false },
          { text: "इंडोनेशिया (मलूकद्वीप)", correct: true },
          { text: "श्रीलंका", correct: false },
          { text: "मेडागास्कर", correct: false },
        ]),
      },
      {
        question: "दालचीनी (Cinnamon) का जन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "श्रीलंका", correct: true },
          { text: "भारत", correct: false },
          { text: "चीन", correct: false },
          { text: "इंडोनेशिया", correct: false },
        ]),
      },
      {
        question: "इलायची (Cardamom) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भारत (दक्षिणभारत)", correct: true },
          { text: "श्रीलंका", correct: false },
          { text: "इंडोनेशिया", correct: false },
          { text: "चीन", correct: false },
        ]),
      },
      {
        question: "कालीमिर्च (Black pepper) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "इंडोनेशिया", correct: false },
          { text: "भारत (मालाबार तट)", correct: true },
          { text: "श्रीलंका", correct: false },
          { text: "चीन", correct: false },
        ]),
      },
      {
        question: "अदरक (Ginger) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "चीन", correct: false },
          { text: "दक्षिण-पूर्व एशिया", correct: true },
          { text: "भारत", correct: false },
          { text: "अफ्रीका", correct: false },
        ]),
      },
      {
        question: "हल्दी (Turmeric) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भारत", correct: true },
          { text: "चीन", correct: false },
          { text: "श्रीलंका", correct: false },
          { text: "इंडोनेशिया", correct: false },
        ]),
      },
      {
        question: "अरंडी (Castor) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भारत", correct: false },
          { text: "अफ्रीका औरभूमध्यसागरीय क्षेत्र", correct: true },
          { text: "चीन", correct: false },
          { text: "अमेरिका", correct: false },
        ]),
      },
      {
        question: "अरहर (Pigeon pea) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भारत", correct: true },
          { text: "अफ्रीका", correct: false },
          { text: "चीन", correct: false },
          { text: "दक्षिणअमेरिका", correct: false },
        ]),
      },
      {
        question: "उड़द (Black gram) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "चीन", correct: false },
          { text: "भारत", correct: true },
          { text: "अफ्रीका", correct: false },
          { text: "मध्यएशिया", correct: false },
        ]),
      },
      {
        question: "मूंग (Mung bean) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "चीन", correct: false },
          { text: "भारत", correct: true },
          { text: "अफ्रीका", correct: false },
          { text: "दक्षिणअमेरिका", correct: false },
        ]),
      },
      {
        question: "राजमा (Kidney bean) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "चीन", correct: false },
          { text: "मेक्सिको औरपेरू", correct: true },
          { text: "अफ्रीका", correct: false },
          { text: "भारत", correct: false },
        ]),
      },
      {
        question: "इमली (Tamarind) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "भारत", correct: false },
          { text: "अफ्रीका", correct: true },
          { text: "चीन", correct: false },
          { text: "दक्षिण-पूर्व एशिया", correct: false },
        ]),
      },
      {
        question: "शकरकंद (Sweet potato) काजन्मस्थानकहाँहै?",
        answers: shuffle([
          { text: "अफ्रीका", correct: false },
          { text: "दक्षिणअमेरिका", correct: true },
          { text: "चीन", correct: false },
          { text: "भारत", correct: false },
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