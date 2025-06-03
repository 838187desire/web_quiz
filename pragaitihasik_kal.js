const questions = [
  {
      question:"अथर्ववेद किस विषय से सबसे अधिक संबंधित है?",
      answers:[
          {text:"संगीत", correct:false},
          {text:"औषधि और जादू-टोना", correct:true}, // correct option
          {text:"खगोलशास्त्र", correct:false},
          {text:"व्याकरण", correct:false},
      ]
  },
  {
      question:"अथर्ववेद को किस नाम से भी जाना जाता है?",
      answers:[
          {text:"ब्रह्मवेद", correct:true}, // correct option
          {text:"कालवेद", correct:false},
          {text:"चिकित्सा वेद", correct:false},
          {text:"यज्ञवेद", correct:false},
      ]
  },
  {
      question:"अथर्ववेद की कुल कितनी संहिताएँ हैं?",
      answers:[
          {text:"5", correct:false},
          {text:"4", correct:false},
          {text:"3", correct:false},
          {text:"2", correct:true}, // correct option
      ]
  },
  {
      question:"अथर्ववेद में कुल कितने मंत्र हैं?",
      answers:[
          {text:"731", correct:false},
          {text:"1200", correct:false},
          {text:"5987", correct:true}, // correct option
          {text:"760", correct:false},
      ]
  },
  {
      question:"अथर्ववेद के मंत्र किस रूप में होते हैं?",
      answers:[
          {text:"गेय", correct:false},
          {text:"पद्य व गद्य दोनों", correct:true}, // correct option
          {text:"केवल गद्य", correct:false},
          {text:"केवल पद्य", correct:false},
      ]
  },
  {
      question:"अथर्ववेद का प्रमुख उद्देश्य क्या है?",
      answers:[
          {text:"युद्ध विजय", correct:false},
          {text:"आध्यात्मिक साधना", correct:false},
          {text:"जीवन की रक्षा और स्वास्थ्य", correct:true}, // correct option
          {text:"गान के नियम", correct:false},
      ]
  },
  {
      question:"अथर्ववेद किस प्रकार के मंत्रों के लिए प्रसिद्ध है?",
      answers:[
          {text:"उपनिषद", correct:false},
          {text:"शांति और अभिचार मंत्र", correct:true}, // correct option
          {text:"ऋचा", correct:false},
          {text:"यजु", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में किस देवता को सबसे अधिक स्थान मिला है?",
      answers:[
          {text:"इन्द्र", correct:false},
          {text:"अग्नि", correct:false},
          {text:"सोम", correct:false},
          {text:"पृथ्वी", correct:true}, // correct option
      ]
  },
  {
      question:"अथर्ववेद में मुख्य रूप से किस जाति/वर्ग का वर्णन है?",
      answers:[
          {text:"ऋषि", correct:false},
          {text:"योद्धा", correct:false},
          {text:"सामान्य जन", correct:true}, // correct option
          {text:"देवता", correct:false},
      ]
  },
  {
      question:"'प्रतीषख्य' शब्द का संबंध किससे है?",
      answers:[
          {text:"व्याकरण", correct:false},
          {text:"छंद", correct:false},
          {text:"स्वर", correct:false},
          {text:"उच्चारण नियम", correct:true}, // correct option
      ]
  },
  {
      question:"अथर्ववेद के अनुसार जादू-टोना किसके लिए प्रयुक्त होता था?",
      answers:[
          {text:"ईश्वर की पूजा", correct:false},
          {text:"युद्ध में विजय", correct:false},
          {text:"शत्रु की हानि या रक्षा के लिए", correct:true}, // correct option
          {text:"कृषि", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में कितने कांड होते हैं?",
      answers:[
          {text:"20", correct:true}, // correct option
          {text:"18", correct:false},
          {text:"25", correct:false},
          {text:"10", correct:false},
      ]
  },
  {
      question:"\"शौनक संहिता\" किस वेद से संबंधित है?",
      answers:[
          {text:"यजुर्वेद", correct:false},
          {text:"सामवेद", correct:false},
          {text:"अथर्ववेद", correct:true}, // correct option
          {text:"ऋग्वेद", correct:false},
      ]
  },
  {
      question:"अथर्ववेद की किस शाखा के पाठ आज भी प्रचलित हैं?",
      answers:[
          {text:"जैमिनीय", correct:false},
          {text:"पैप्पलाद", correct:true}, // correct option
          {text:"कठ", correct:false},
          {text:"मैत्रायणी", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में किस प्रकार की औषधियों का उल्लेख मिलता है?",
      answers:[
          {text:"वनस्पति और खनिज", correct:true}, // correct option
          {text:"केवल वनस्पति", correct:false},
          {text:"केवल रसायन", correct:false},
          {text:"केवल मंत्र", correct:false},
      ]
  },
  {
      question:"अथर्ववेद किस विषय से सबसे अधिक संबंधित है?",
      answers:[
          {text:"संगीत", correct:false},
          {text:"औषधि और जादू-टोना", correct:true},
          {text:"खगोलशास्त्र", correct:false},
          {text:"व्याकरण", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में किस रोग के निवारण हेतु मंत्र है?",
      answers:[
          {text:"कैंसर", correct:false},
          {text:"ज्वर (बुखार)", correct:true},
          {text:"उच्च रक्तचाप", correct:false},
          {text:"मधुमेह", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में शिक्षा का प्रमुख उद्देश्य क्या था?",
      answers:[
          {text:"यज्ञ विद्या", correct:false},
          {text:"आयुर्वेदिक ज्ञान", correct:false},
          {text:"सामाजिक सुरक्षा", correct:true},
          {text:"दर्शन", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में 'संहिता' का क्या अर्थ है?",
      answers:[
          {text:"उपनिषद", correct:false},
          {text:"संग्रह", correct:true},
          {text:"टीका", correct:false},
          {text:"उपदेश", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में किस उपनिषद का उल्लेख है?",
      answers:[
          {text:"तैत्तिरीय", correct:false},
          {text:"ईश", correct:false},
          {text:"मांडूक्य", correct:false},
          {text:"मुण्डक", correct:true},
      ]
  },
  {
      question:"अथर्ववेद में किस प्रकार के जपों का उपयोग किया गया है?",
      answers:[
          {text:"वेद मंत्र", correct:false},
          {text:"तांत्रिक मंत्र", correct:true},
          {text:"स्तोत्र", correct:false},
          {text:"उपनिषदिक मंत्र", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में किस प्रकार के देवी-देवताओं का उल्लेख मिलता है?",
      answers:[
          {text:"केवल वैदिक", correct:false},
          {text:"केवल स्थानीय", correct:false},
          {text:"वैदिक और लोकदेवता दोनों", correct:true},
          {text:"कोई नहीं", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में सामाजिक व्यवस्था का उल्लेख किस रूप में मिलता है?",
      answers:[
          {text:"वर्ण व्यवस्था", correct:true},
          {text:"पंचायत प्रणाली", correct:false},
          {text:"दास व्यवस्था", correct:false},
          {text:"ग्राम सभा", correct:false},
      ]
  },
  {
      question:"अथर्ववेद का प्रयोग किस प्रकार के यज्ञों में होता था?",
      answers:[
          {text:"केवल अग्निहोत्र", correct:false},
          {text:"घरेलू एवं उपचारात्मक", correct:true},
          {text:"युद्ध संबंधित", correct:false},
          {text:"केवल राजसूय यज्ञ", correct:false},
      ]
  },
  {
      question:"अथर्ववेद की रचना किस उद्देश्य से हुई थी?",
      answers:[
          {text:"भक्ति", correct:false},
          {text:"संगीत", correct:false},
          {text:"जीवन रक्षा, रोग निवारण, तंत्र-मंत्र", correct:true},
          {text:"केवल यज्ञ", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में \"भूतविद्या\" का आशय है –",
      answers:[
          {text:"आत्मा का ज्ञान", correct:false},
          {text:"अतीत का अध्ययन", correct:false},
          {text:"तांत्रिक शक्तियाँ", correct:false},
          {text:"प्रेत या आत्मा से संबंधित ज्ञान", correct:true},
      ]
  },
  {
      question:"अथर्ववेद का एक महत्वपूर्ण ब्राह्मण ग्रंथ है –",
      answers:[
          {text:"ऐतरेय", correct:false},
          {text:"गोपथ", correct:true},
          {text:"शतपथ", correct:false},
          {text:"तैत्तिरीय", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में मंत्रों के प्रयोग से किस प्रकार का उपचार होता था?",
      answers:[
          {text:"मनोवैज्ञानिक", correct:false},
          {text:"शारीरिक और आध्यात्मिक दोनों", correct:true},
          {text:"केवल भौतिक", correct:false},
          {text:"केवल आध्यात्मिक", correct:false},
      ]
  },
  {
      question:"अथर्ववेद के अनुसार, किस देवता को ‘मानव शरीर की रचना’ में सहयोगी बताया गया है?",
      answers:[
          {text:"ब्रह्मा", correct:false},
          {text:"इंद्र", correct:false},
          {text:"विश्वकर्मा", correct:true},
          {text:"रुद्र", correct:false},
      ]
  },
  {
      question:"'मुण्डक' और 'प्रश्न' उपनिषद किस वेद से संबंधित हैं?",
      answers:[
          {text:"ऋग्वेद", correct:false},
          {text:"यजुर्वेद", correct:false},
          {text:"अथर्ववेद", correct:true},
          {text:"सामवेद", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में किस प्रकार के शत्रु विनाशक मंत्र होते हैं?",
      answers:[
          {text:"रक्षामंत्र", correct:false},
          {text:"अभिचारिक मंत्र", correct:true},
          {text:"संकल्प मंत्र", correct:false},
          {text:"उपनयन मंत्र", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में किस तत्व को जीवन शक्ति का स्रोत माना गया है?",
      answers:[
          {text:"वायु", correct:false},
          {text:"अग्नि", correct:false},
          {text:"प्राण", correct:true},
          {text:"जल", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में वर्णित औषधियाँ किस रूप में मानी जाती हैं?",
      answers:[
          {text:"भोजन", correct:false},
          {text:"मंत्र", correct:false},
          {text:"देवी-देवता", correct:false},
          {text:"देवत्व सम्पन्न", correct:true},
      ]
  },
  {
      question:"अथर्ववेद में विवाह को किस रूप में प्रस्तुत किया गया है?",
      answers:[
          {text:"धार्मिक कर्मकांड", correct:false},
          {text:"सामाजिक बंधन", correct:true},
          {text:"प्रेम-संविधान", correct:false},
          {text:"यज्ञीय संस्था", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में ऋतुओं की संख्या कितनी मानी गई है?",
      answers:[
          {text:"चार", correct:false},
          {text:"पांच", correct:false},
          {text:"छः", correct:true},
          {text:"सात", correct:false},
      ]
  },
  {
      question:"अथर्ववेद का महत्व प्राचीन काल में किस रूप में था?",
      answers:[
          {text:"विज्ञान का स्रोत", correct:false},
          {text:"राजनीतिक ग्रंथ", correct:false},
          {text:"लोक जीवन की अभिव्यक्ति", correct:true},
          {text:"संगीत शास्त्र", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में किस प्राकृतिक तत्त्व की शक्ति के लिए स्तुति है?",
      answers:[
          {text:"सूर्य", correct:false},
          {text:"पर्वत", correct:false},
          {text:"जल", correct:true},
          {text:"वायु", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में 'अभिचार' शब्द का अर्थ है –",
      answers:[
          {text:"पवित्रता", correct:false},
          {text:"विवाह", correct:false},
          {text:"तांत्रिक प्रयोग", correct:true},
          {text:"चिकित्सा", correct:false},
      ]
  },
  {
      question:"अथर्ववेद की शिक्षाएं किसको अधिक प्रभावित करती थीं?",
      answers:[
          {text:"ब्राह्मण वर्ग", correct:false},
          {text:"क्षत्रिय वर्ग", correct:false},
          {text:"आम जनमानस", correct:true},
          {text:"राजा", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में किस प्रकार के ऋषियों की कल्पना मिलती है?",
      answers:[
          {text:"युद्ध विशेषज्ञ", correct:false},
          {text:"वैद्य और मंत्रज्ञ", correct:true},
          {text:"व्यापारी", correct:false},
          {text:"राजा", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में विज्ञान की किस शाखा के आरंभिक संकेत मिलते हैं?",
      answers:[
          {text:"गणित", correct:false},
          {text:"खगोल", correct:false},
          {text:"चिकित्सा", correct:true},
          {text:"भौतिकी", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में घर-परिवार को क्या महत्व दिया गया है?",
      answers:[
          {text:"त्याज्य", correct:false},
          {text:"जीवन का मूल", correct:true},
          {text:"उपेक्षित", correct:false},
          {text:"बाधक", correct:false},
      ]
  },
  {
      question:"अथर्ववेद किस ऋषि को समर्पित माना जाता है?",
      answers:[
          {text:"यास्क", correct:false},
          {text:"अत्रि", correct:false},
          {text:"अंगिरा", correct:true},
          {text:"भारद्वाज", correct:false},
      ]
  },
  {
      question:"अथर्ववेद के किस मंत्र में संतान प्राप्ति की कामना की जाती है?",
      answers:[
          {text:"विद्या मंत्र", correct:false},
          {text:"संतानोपत्ति मंत्र", correct:true},
          {text:"रक्षामंत्र", correct:false},
          {text:"संकल्प मंत्र", correct:false},
      ]
  },
  {
      question:"अथर्ववेद के अनुसार जीवन का उद्देश्य क्या है?",
      answers:[
          {text:"भोग", correct:false},
          {text:"तपस्या", correct:false},
          {text:"रोगमुक्त, सुरक्षित, संतुलित जीवन", correct:true},
          {text:"मोक्ष", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में शिक्षा के साधन के रूप में किसका वर्णन है?",
      answers:[
          {text:"आश्रम", correct:false},
          {text:"विद्यालय", correct:false},
          {text:"गुरु-कुल", correct:true},
          {text:"विश्वविद्यालय", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में कौन सा विषय सबसे अधिक विविधता लिए हुए है?",
      answers:[
          {text:"अर्थशास्त्र", correct:false},
          {text:"जीवन के सभी पक्ष", correct:true},
          {text:"केवल यज्ञ", correct:false},
          {text:"दर्शन", correct:false},
      ]
  },
  {
      question:"अथर्ववेद की शाखा ‘पैप्पलाद’ का नाम किस पर रखा गया है?",
      answers:[
          {text:"एक ऋषि पर", correct:true},
          {text:"एक पर्वत पर", correct:false},
          {text:"एक वनस्पति पर", correct:false},
          {text:"एक यज्ञ पर", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में 'गृहस्थ जीवन' का उल्लेख किस रूप में है?",
      answers:[
          {text:"अधम", correct:false},
          {text:"श्रेष्ठ", correct:true},
          {text:"धर्मरहित", correct:false},
          {text:"त्याग्य", correct:false},
      ]
  },
  {
      question:"अथर्ववेद में शांति पाठ का उद्देश्य क्या है?",
      answers:[
          {text:"युद्ध में विजय", correct:false},
          {text:"समस्त जीवों में संतुलन", correct:true},
          {text:"देवताओं की प्रसन्नता", correct:false},
          {text:"दान में वृद्धि", correct:false},
      ]
  },
  {
      question:"अथर्ववेद की विशेषता क्या है?",
      answers:[
          {text:"केवल यज्ञ संबंधित", correct:false},
          {text:"दार्शनिक", correct:false},
          {text:"लोकजीवन, औषधि और तांत्रिक ज्ञान का संकलन", correct:true},
          {text:"भक्ति रस प्रधान", correct:false},
      ]
  }
];