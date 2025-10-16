const questions = [
    {
        topHeading: "सल्तनत काल पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'तारीख-ए-फिरोजशाही' के लेखक कौन हैं?",
        answers: shuffle([
            { text: "अमीर खुसरो", correct: false },
            { text: "इब्न बतूता", correct: false },
            { text: "जियाउद्दीन बरनी", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>जियाउद्दीन बरनी</b> एक प्रसिद्ध इतिहासकार थे।<br><br><i class='fa-solid fa-angles-right icon'></i> जिन्होंने अपनी इस पुस्तक में <b>बलबन से लेकर फिरोजशाह तुगलक</b> के शासनकाल तक का इतिहास लिखा है।"
    },
    {
        question: "प्रश्न 2. कुतुब मीनार का निर्माण कार्य किसने पूरा करवाया था?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ऐबक ने केवल इसकी नींव रखी और पहली मंजिल बनवाई थी।<br><br><i class='fa-solid fa-angles-right icon'></i> इसकी शेष मंजिलों का निर्माण <b>इल्तुतमिश</b> ने पूरा करवाया।"
    },
    {
        question: "प्रश्न 3. सल्तनत काल में 'बरीद' किसे कहा जाता था?",
        answers: shuffle([
            { text: "सेनापति", correct: false },
            { text: "न्यायाधीश", correct: false },
            { text: "गुप्तचर (जासूस)", correct: true },
            { text: "राजस्व अधिकारी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्तनत में एक कुशल <b>गुप्तचर प्रणाली</b> थी।<br><br><i class='fa-solid fa-angles-right icon'></i> सूचनाएं एकत्र करने वाले गुप्तचरों को <b>'बरीद'</b> और विभाग को <b>'बरीद-ए-मुमालिक'</b> कहा जाता था।"
    },
    {
        question: "प्रश्न 4. शुद्ध अरबी सिक्के 'टंका' (चांदी) और 'जीतल' (तांबा) किसने जारी किए?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इल्तुतमिश</b> ने सल्तनत की मुद्रा प्रणाली को व्यवस्थित किया।<br><br><i class='fa-solid fa-angles-right icon'></i> और पहली बार शुद्ध अरबी शैली के सिक्के <b>'टंका'</b> (चांदी) और <b>'जीतल'</b> (तांबा) जारी किए।"
    },
    {
        question: "प्रश्न 5. सल्तनत काल में 'दीवान-ए-इंशा' का क्या कार्य था?",
        answers: shuffle([
            { text: "सैन्य भर्ती करना", correct: false },
            { text: "राजस्व वसूलना", correct: false },
            { text: "शाही पत्राचार का कार्य देखना", correct: true },
            { text: "न्याय करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह विभाग सुल्तान के <b>आदेशों और पत्रों का मसौदा</b> तैयार करने और उन्हें भेजने के लिए जिम्मेदार था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे <b>शाही पत्राचार विभाग</b> भी कहा जाता था।"
    },
    {
        question: "प्रश्न 6. विजयनगर साम्राज्य की स्थापना किस सुल्तान के काल में हुई थी?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1336 ई.</b> में, जब <b>मुहम्मद बिन तुगलक</b> का शासन था।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>हरिहर और बुक्का</b> नामक दो भाइयों ने दक्षिण भारत में <b>विजयनगर साम्राज्य की स्थापना</b> की।"
    },
    {
        question: "प्रश्न 7. सल्तनत काल में 'अमीर-ए-आखूर' किसका अधिकारी होता था?",
        answers: shuffle([
            { text: "न्याय विभाग", correct: false },
            { text: "शाही घुड़साल (अश्वशाला)", correct: true },
            { text: "नौसेना", correct: false },
            { text: "गुप्तचर विभाग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>'अमीर-ए-आखूर'</b> शाही घोड़ों की देखभाल करने वाले <b>अस्तबल का प्रमुख अधिकारी</b> होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> रजिया सुल्तान ने याकूत को इसी पद पर नियुक्त किया था।"
    },
    {
        question: "प्रश्न 8. किस संगीत वाद्ययंत्र को 'हिन्दू-मुस्लिम गान वाद्यों का सर्वश्रेष्ठ मिश्रण' माना जाता है?",
        answers: shuffle([
            { text: "वीणा", correct: false },
            { text: "तबला", correct: false },
            { text: "सारंगी", correct: false },
            { text: "सितार", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माना जाता है कि <b>अमीर खुसरो</b> ने भारतीय <b>वीणा</b> और ईरानी <b>तम्बूरा</b> को मिलाकर <b>सितार</b> का आविष्कार किया।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए इसे हिन्दू-मुस्लिम शैलियों का <b>सर्वश्रेष्ठ मिश्रण</b> कहा जाता है।"
    },
    {
        question: "प्रश्न 9. सल्तनत काल में प्रचलित डाक व्यवस्था को क्या कहा जाता था?",
        answers: shuffle([
            { text: "रहला", correct: false },
            { text: "उलूक और दावा", correct: true },
            { text: "बरीद", correct: false },
            { text: "इंशा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इब्न बतूता के अनुसार, सल्तनत में दो प्रकार की डाक व्यवस्था थी।<br><br><i class='fa-solid fa-angles-right icon'></i> <b>'उलूक' (घुड़सवारों द्वारा) और 'दावा' (पैदल हरकारों द्वारा)</b>।"
    },
    {
        question: "प्रश्न 10. दिल्ली के किस सुल्तान ने बेरोजगारों के लिए एक रोजगार कार्यालय की स्थापना की?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोज शाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपने लोक कल्याणकारी कार्यों के तहत, <b>फिरोज शाह तुगलक</b> ने योग्य व्यक्तियों को रोजगार दिलाने में मदद के लिए एक दफ्तर खोला था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसे <b>'रोजगार दफ्तर'</b> कहा जाता था।"
    },
    {
        question: "प्रश्न 11. चंगेज खान के नेतृत्व में मंगोलों ने भारत की सीमा पर किसके शासनकाल में आक्रमण किया?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगोल नेता <b>चंगेज खान</b>, ख्वारिज्म के शाह जलालुद्दीन मंगबरनी का पीछा करते हुए <b>इल्तुतमिश</b> के शासनकाल में सिंधु नदी तक आ गया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इल्तुतमिश ने मंगबरनी को शरण न देकर सल्तनत को मंगोल आक्रमण से बचा लिया।"
    },
    {
        question: "प्रश्न 12. अलाउद्दीन खिलजी के बाजार नियंत्रण का मुख्य उद्देश्य क्या था?",
        answers: shuffle([
            { text: "जन कल्याण", correct: false },
            { text: "व्यापार को बढ़ावा देना", correct: false },
            { text: "सेना का खर्च कम करना", correct: true },
            { text: "जमाखोरी रोकना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वह एक विशाल स्थायी सेना रखना चाहता था, लेकिन खजाने पर अधिक बोझ डाले बिना।<br><br><i class='fa-solid fa-angles-right icon'></i> इसलिए उसने वस्तुओं की कीमतें नियंत्रित कीं ताकि <b>सैनिक कम वेतन में भी अपना गुजारा कर सकें</b>, जिससे <b>सेना का खर्च कम हो</b>।"
    },
    {
        question: "प्रश्न 13. सल्तनत काल में 'वजीर' का पद किस विभाग से संबंधित था?",
        answers: shuffle([
            { text: "प्रधानमंत्री और राजस्व प्रमुख", correct: true },
            { text: "सेना प्रमुख", correct: false },
            { text: "मुख्य न्यायाधीश", correct: false },
            { text: "विदेश मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>वजीर</b> (दीवान-ए-विजारत का प्रमुख) सुल्तान के बाद सबसे शक्तिशाली अधिकारी होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो <b>प्रधानमंत्री</b> की तरह काम करता था और <b>राजस्व विभाग</b> का भी प्रमुख होता था।"
    },
    {
        question: "प्रश्न 14. बहमनी साम्राज्य की स्थापना किसके काल में हुई?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1347 ई.</b> में, <b>अलाउद्दीन बहमन शाह (हसन गंगू)</b> ने <b>मुहम्मद बिन तुगलक</b> के खिलाफ विद्रोह कर दक्कन में <b>बहमनी साम्राज्य</b> की स्थापना की।"
    },
    {
        question: "प्रश्न 15. दिल्ली का वह कौन सा सुल्तान था जिसने अपने संस्मरण लिखे?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "फिरोज शाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोज शाह तुगलक</b> ने <b>'फुतुहात-ए-फिरोजशाही'</b> नामक अपनी आत्मकथा (संस्मरण) लिखी थी।"
    },
    {
        question: "प्रश्न 16. 'खलीफा' से सुल्तान पद की स्वीकृति प्राप्त करने वाला दिल्ली का पहला सुल्तान कौन था?",
        answers: shuffle([
            { text: "कुतुबुद्दीन ऐबक", correct: false },
            { text: "इल्तुतमिश", correct: true },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1229 ई.</b> में बगदाद के अब्बासी खलीफा ने <b>इल्तुतमिश</b> को <b>'सुल्तान-ए-आजम'</b> की उपाधि देकर उसके शासन को <b>वैधानिक मान्यता</b> प्रदान की।"
    },
    {
        question: "प्रश्न 17. अलाउद्दीन खिलजी ने किस क्षेत्र पर विजय के बाद उसका नाम 'खिज्राबाद' रखा?",
        answers: shuffle([
            { text: "रणथंभौर", correct: false },
            { text: "देवगिरि", correct: false },
            { text: "चित्तौड़", correct: true },
            { text: "वारंगल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1303 ई.</b> में <b>चित्तौड़</b> पर विजय प्राप्त करने के बाद, अलाउद्दीन खिलजी ने इसका प्रशासन अपने पुत्र <b>खिज्र खान</b> को सौंप दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> और उसी के नाम पर इसका नाम <b>'खिज्राबाद'</b> रख दिया।"
    },
    {
        question: "प्रश्न 18. सल्तनत काल में 'मुकद्दम' या 'चौधरी' कौन होते थे?",
        answers: shuffle([
            { text: "गाँव के मुखिया", correct: true },
            { text: "शहर के कोतवाल", correct: false },
            { text: "सेना के अधिकारी", correct: false },
            { text: "न्यायाधीश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मुकद्दम, चौधरी या खूत गाँव के प्रभावशाली व्यक्ति होते थे।<br><br><i class='fa-solid fa-angles-right icon'></i> जो वंशानुगत रूप से <b>लगान वसूलने</b> और <b>स्थानीय प्रशासन</b> में मदद करने का काम करते थे।"
    },
    {
        question: "प्रश्न 19. 'दाग' (घोड़ों को दागना) और 'हुलिया' (सैनिकों का हुलिया लिखना) की प्रथा किसने शुरू की?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेना में भ्रष्टाचार को रोकने के लिए, <b>अलाउद्दीन खिलजी</b> ने यह प्रथा शुरू की।<br><br><i class='fa-solid fa-angles-right icon'></i> ताकि निरीक्षण के समय घोड़ों को बदला न जा सके और सैनिकों की जगह कोई और न आ सके।"
    },
    {
        question: "प्रश्न 20. किस सुल्तान की मृत्यु चौगान (पोलो) खेलते समय घोड़े से गिरकर हुई थी?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "जलालुद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>1210 ई.</b> में लाहौर में <b>चौगान (पोलो)</b> खेलते समय घोड़े से गिरने के कारण <b>कुतुबुद्दीन ऐबक</b> की मृत्यु हो गई थी।"
    },
    {
        question: "प्रश्न 21. दिल्ली सल्तनत के किस वंश ने सबसे लंबे समय तक शासन किया?",
        answers: shuffle([
            { text: "गुलाम वंश", correct: false },
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: true },
            { text: "लोदी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>तुगलक वंश</b> ने 1320 से 1414 ई. तक, लगभग <b>94 वर्षों</b> तक शासन किया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो सल्तनत के सभी वंशों में <b>सबसे लंबा कार्यकाल</b> था।"
    },
    {
        question: "प्रश्न 22. दिल्ली सल्तनत के किस वंश ने सबसे कम समय तक शासन किया?",
        answers: shuffle([
            { text: "गुलाम वंश", correct: false },
            { text: "खिलजी वंश", correct: true },
            { text: "सैय्यद वंश", correct: false },
            { text: "लोदी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>खिलजी वंश</b> ने 1290 से 1320 ई. तक, केवल <b>30 वर्षों</b> तक शासन किया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो सल्तनत काल में <b>सबसे छोटा शासनकाल</b> था।"
    },
    {
        question: "प्रश्न 23. जौनपुर शहर की स्थापना किसने की थी?",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोज शाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोज शाह तुगलक</b> ने अपने चचेरे भाई मुहम्मद बिन तुगलक (जिसका मूल नाम <b>जौना खान</b> था) की याद में <b>जौनपुर शहर</b> की स्थापना की थी।"
    },
    {
        question: "प्रश्न 24. सल्तनत काल में 'खम्स' क्या था?",
        answers: shuffle([
            { text: "कृषि कर", correct: false },
            { text: "व्यापारिक कर", correct: false },
            { text: "युद्ध में लूट का 1/5 हिस्सा जो सुल्तान को मिलता था", correct: true },
            { text: "धार्मिक कर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लामी कानून के अनुसार, युद्ध में लूटी गई संपत्ति का 4/5 हिस्सा सैनिकों में बांटा जाता था।<br><br><i class='fa-solid fa-angles-right icon'></i> और 1/5 हिस्सा ('खम्स') राजकोष में जमा होता था।"
    },
    {
        question: "प्रश्न 25. किस सुल्तान ने स्वयं को 'खलीफा का नायब' घोषित किया?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुबारक शाह खिलजी", correct: false },
            { text: "फिरोज शाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोज शाह तुगलक</b> ने अपनी धार्मिकता और खलीफा के प्रति निष्ठा दिखाने के लिए अपने सिक्कों पर स्वयं को <b>'खलीफा का नायब' (प्रतिनिधि)</b> अंकित करवाया।"
    },
    {
        question: "प्रश्न 26. किस सुल्तान ने स्वयं को 'खलीफा' घोषित कर दिया था?",
        answers: shuffle([
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "कुतुबुद्दीन मुबारक खिलजी", correct: true },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन के पुत्र <b>मुबारक खिलजी</b> ने खलीफा की सत्ता को मानने से इंकार कर दिया।<br><br><i class='fa-solid fa-angles-right icon'></i> और स्वयं 'अल-वासिक-बिल्लाह' की उपाधि धारण कर खुद को खलीफा घोषित कर दिया।"
    },
    {
        question: "प्रश्न 27. सल्तनत काल में 'दीवान-ए-रिसालत' विभाग किससे संबंधित था?",
        answers: shuffle([
            { text: "वित्त", correct: false },
            { text: "सैन्य मामले", correct: false },
            { text: "धार्मिक मामले और विदेशी मामले", correct: true },
            { text: "न्याय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस विभाग के कार्यों को लेकर इतिहासकारों में मतभेद है।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन सामान्यतः इसे <b>धार्मिक मुद्दों, वजीफों और विदेशी दूतों</b> से संबंधित माना जाता है।"
    },
    {
        question: "प्रश्न 28. भारत में पहली तुर्की मस्जिद 'कुव्वत-उल-इस्लाम' का निर्माण किसने करवाया था?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "कुतुबुद्दीन ऐबक", correct: true },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> दिल्ली विजय के उपलक्ष्य में, <b>कुतुबुद्दीन ऐबक</b> ने दिल्ली में राय पिथौरा के किले के पास 27 हिंदू और जैन मंदिरों को तोड़कर उनके मलबे से <b>'कुव्वत-उल-इस्लाम' (इस्लाम की ताकत)</b> मस्जिद का निर्माण करवाया।"
    },
    {
        question: "प्रश्न 29. सल्तनत काल में तोपखाने का पहली बार प्रयोग किस युद्ध में हुआ?",
        answers: shuffle([
            { text: "तराइन का प्रथम युद्ध", correct: false },
            { text: "चंदावर का युद्ध", correct: false },
            { text: "पानीपत का प्रथम युद्ध", correct: true },
            { text: "खानवा का युद्ध", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>बाबर</b> ने भारत में पहली बार <b>पानीपत के प्रथम युद्ध (1526)</b> में तुगलमा युद्ध नीति के साथ-साथ <b>तोपखाने (आर्टिलरी)</b> का प्रभावी ढंग से उपयोग किया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो उसकी जीत का एक मुख्य कारण बना।"
    },
    {
        question: "प्रश्न 30. 'सिरी' का किला और 'हौज-ए-खास' का निर्माण किस सुल्तान ने करवाया था?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "जलालुद्दीन खिलजी", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "ग्यासुद्दीन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मंगोल आक्रमणों से दिल्ली की रक्षा के लिए <b>अलाउद्दीन खिलजी</b> ने 'सिरी' को अपनी राजधानी बनाया और एक किला बनवाया।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने पानी की आपूर्ति के लिए <b>'हौज-ए-खास'</b> नामक एक बड़ा तालाब भी बनवाया।"
    },
    {
        question: "प्रश्न 31. किस सुल्तान के दरबार में सबसे अधिक गुलाम थे?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोज शाह तुगलक", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोज शाह तुगलक</b> को गुलामों का बहुत शौक था।<br><br><i class='fa-solid fa-angles-right icon'></i> उसके पास लगभग <b>1,80,000 गुलाम</b> थे, जिनकी देखभाल के लिए उसने <b>'दीवान-ए-बंदगान'</b> (गुलामों का विभाग) नामक एक अलग विभाग भी बनाया था।"
    },
    {
        question: "प्रश्न 32. 'तबकात-ए-नासिरी' नामक ग्रंथ किसने लिखा था?",
        answers: shuffle([
            { text: "अमीर खुसरो", correct: false },
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "मिनहाज-उस-सिराज", correct: true },
            { text: "हसन निजामी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>मिनहाज-उस-सिराज</b> ने यह ग्रंथ सुल्तान <b>नसीरुद्दीन महमूद</b> को समर्पित किया था।<br><br><i class='fa-solid fa-angles-right icon'></i> इसमें मुहम्मद गोरी के आक्रमणों से लेकर 1260 ई. तक का इतिहास वर्णित है।"
    },
    {
        question: "प्रश्न 33. सल्तनत काल में 'काजी-उल-कुजात' कौन होता था?",
        answers: shuffle([
            { text: "वित्त मंत्री", correct: false },
            { text: "सेनापति", correct: false },
            { text: "मुख्य न्यायाधीश", correct: true },
            { text: "विदेश मंत्री", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तान के बाद न्याय का सर्वोच्च अधिकारी 'काजी-उल-कुजात' होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो <b>न्याय विभाग का प्रमुख</b> था।"
    },
    {
        question: "प्रश्न 34. सल्तनत काल के किस शासक ने अपनी राजधानी तुगलकाबाद में स्थापित की?",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "ग्यासुद्दीन तुगलक", correct: true },
            { text: "बहलोल लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>ग्यासुद्दीन तुगलक</b> ने दिल्ली के पास एक नया नगर 'तुगलकाबाद' बसाया।<br><br><i class='fa-solid fa-angles-right icon'></i> और एक मजबूत किले का निर्माण करवाकर उसे अपनी राजधानी बनाया।"
    },
    {
        question: "प्रश्न 35. सल्तनत काल में शरीयत के आधार पर कितने प्रकार के कर लगाए जाते थे?",
        answers: shuffle([
            { text: "दो", correct: false },
            { text: "तीन", correct: false },
            { text: "चार", correct: true },
            { text: "पाँच", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस्लामी कानून (शरीयत) के अनुसार <b>चार प्रकार</b> के कर लगाने की अनुमति थी।<br><br><i class='fa-solid fa-angles-right icon'></i> ये थे - खराज, खम्स, जजिया और जकात।"
    },
    {
        question: "प्रश्न 36. किस सुल्तान ने 'नवरोज' त्योहार मनाने पर पाबंदी लगा दी थी?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "औरंगजेब", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यह प्रश्न सल्तनत काल के बाहर का है, लेकिन तुलनात्मक है।<br><br><i class='fa-solid fa-angles-right icon'></i> बलबन ने ईरानी त्योहार <b>नवरोज</b> को दरबार में मनाना शुरू किया था, जबकि मुगल बादशाह औरंगजेब ने इसे गैर-इस्लामी मानकर इस पर रोक लगा दी थी।"
    },
    {
        question: "प्रश्न 37. किस सुल्तान के बारे में कहा जाता है कि उसने सांकेतिक मुद्रा के रूप में चमड़े के सिक्के भी चलाए?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "यह एक किंवदंती है", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> यद्यपि फरिश्ता जैसे बाद के इतिहासकारों ने इसका उल्लेख किया है, लेकिन समकालीन स्रोतों जैसे बरनी या इब्न बतूता ने चमड़े के सिक्कों का कोई उल्लेख नहीं किया है।<br><br><i class='fa-solid fa-angles-right icon'></i> मुहम्मद बिन तुगलक ने कांसे के सिक्के चलाए थे।"
    },
    {
        question: "प्रश्न 38. सल्तनत काल की वास्तुकला की मुख्य विशेषता क्या थी?",
        answers: shuffle([
            { text: "मेहराब और गुंबद का प्रयोग", correct: true },
            { text: "ऊँचे शिखर", correct: false },
            { text: "नक्काशीदार मूर्तियाँ", correct: false },
            { text: "लकड़ी का प्रयोग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सल्तनत काल की वास्तुकला (इंडो-इस्लामिक शैली) में नुकीले मेहराबों, गुंबदों और मीनारों का प्रमुखता से प्रयोग किया गया।<br><br><i class='fa-solid fa-angles-right icon'></i> जो भारतीय शैली से भिन्न था।"
    },
    {
        question: "प्रश्न 39. 'खजाइन-उल-फुतुह' (विजयों का खजाना) किसकी रचना है?",
        answers: shuffle([
            { text: "जियाउद्दीन बरनी", correct: false },
            { text: "हसन निजामी", correct: false },
            { text: "अमीर खुसरो", correct: true },
            { text: "इब्न बतूता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इस पुस्तक में <b>अमीर खुसरो</b> ने अलाउद्दीन खिलजी के शुरुआती शासनकाल और उसकी <b>विजयों</b> का काव्यात्मक वर्णन किया है।"
    },
    {
        question: "प्रश्न 40. सल्तनत काल में भूमि की उपज के आधार पर भू-राजस्व निर्धारित करने की प्रणाली को क्या कहते थे?",
        answers: shuffle([
            { text: "जब्ती प्रणाली", correct: false },
            { text: "मसाहत प्रणाली", correct: true },
            { text: "नस्क प्रणाली", correct: false },
            { text: "कनकूत प्रणाली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन खिलजी ने भूमि को 'बिस्वा' इकाई में मापकर उपज का अनुमान लगाने के बाद लगान निर्धारित करने की 'मसाहत' प्रणाली शुरू की।"
    },
    {
        question: "प्रश्न 41. सल्तनत काल में 'शहना-ए-मंडी' कौन होता था?",
        answers: shuffle([
            { text: "सेना का अधिकारी", correct: false },
            { text: "बाजार का अधीक्षक", correct: true },
            { text: "नगर का कोतवाल", correct: false },
            { text: "शाही कारखानों का प्रमुख", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अलाउद्दीन खिलजी की बाजार नियंत्रण प्रणाली के तहत, <b>'शहना-ए-मंडी'</b> बाजार का <b>सर्वोच्च अधिकारी</b> होता था।<br><br><i class='fa-solid fa-angles-right icon'></i> जो कीमतों पर नियंत्रण रखता था और व्यापारियों पर नजर रखता था।"
    },
    {
        question: "प्रश्न 42. किस सुल्तान ने अशोक के दो स्तंभों को मेरठ और टोपरा से दिल्ली लाकर स्थापित करवाया?",
        answers: shuffle([
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "फिरोज शाह तुगलक", correct: true },
            { text: "सिकंदर लोदी", correct: false },
            { text: "इल्तुतमिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>फिरोज शाह तुगलक</b> को इतिहास और पुरानी इमारतों में रुचि थी।<br><br><i class='fa-solid fa-angles-right icon'></i> उसने अशोक के इन स्तंभों को बड़ी मेहनत से दिल्ली मंगवाया और <b>फिरोजशाह कोटला</b> में स्थापित करवाया।"
    },
    {
        question: "प्रश्न 43. तैमूर के आक्रमण ने किस वंश के अंत का मार्ग प्रशस्त किया?",
        answers: shuffle([
            { text: "खिलजी वंश", correct: false },
            { text: "तुगलक वंश", correct: true },
            { text: "सैय्यद वंश", correct: false },
            { text: "लोदी वंश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> तैमूर के 1398 ई. के आक्रमण ने <b>तुगलक वंश</b> की कमर तोड़ दी।<br><br><i class='fa-solid fa-angles-right icon'></i> और सल्तनत को इतना कमजोर कर दिया कि जल्द ही उसका अंत हो गया।"
    },
    {
        question: "प्रश्न 44. सल्तनत काल में 'दीवान-ए-मुस्तखराज' विभाग की स्थापना क्यों की गई थी?",
        answers: shuffle([
            { text: "दान देने के लिए", correct: false },
            { text: "गुलामों की देखभाल के लिए", correct: false },
            { text: "बकाया राजस्व वसूलने के लिए", correct: true },
            { text: "बाजार पर नियंत्रण के लिए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन खिलजी</b> ने राजस्व अधिकारियों द्वारा बकाया रह गई लगान की राशि को सख्ती से वसूलने के लिए इस नए विभाग की स्थापना की थी।"
    },
    {
        question: "प्रश्न 45. 'आइन-उल-मुल्क मुल्तानी' किस सुल्तान का एक योग्य मंत्री और सेनापति था?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी और मुहम्मद बिन तुगलक", correct: true },
            { text: "फिरोजशाह तुगलक", correct: false },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आइन-उल-मुल्क एक अत्यंत प्रतिभाशाली व्यक्ति था।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसने <b>खिलजी और तुगलक दोनों सुल्तानों</b> की सेवा की और दक्षिण में एक विद्रोह को शांतिपूर्वक दबाने में सफलता पाई।"
    },
    {
        question: "प्रश्न 46. किस सुल्तान ने सिक्कों पर से खलीफा का नाम हटाकर अपना नाम अंकित करवाया?",
        answers: shuffle([
            { text: "इल्तुतमिश", correct: false },
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>अलाउद्दीन खिलजी</b> ने खलीफा को नाममात्र की मान्यता दी।<br><br><i class='fa-solid fa-angles-right icon'></i> लेकिन अपने सिक्कों पर स्वयं को <b>'सिकंदर-ए-सानी'</b> जैसी उपाधियों से विभूषित किया।"
    },
    {
        question: "प्रश्न 47. सल्तनत काल में 'कारखाना' शब्द का प्रयोग किसके लिए होता था?",
        answers: shuffle([
            { text: "केवल हथियार बनाने की जगह", correct: false },
            { text: "केवल कपड़ा बुनने की जगह", correct: false },
            { text: "शाही वस्तुओं का निर्माण और भंडारण करने वाली कार्यशालाएं", correct: true },
            { text: "सिक्के ढालने की टकसाल", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुल्तानों के <b>'कारखाने'</b> ऐसी कार्यशालाएं थीं।<br><br><i class='fa-solid fa-angles-right icon'></i> जहाँ <b>शाही परिवार और दरबार</b> के लिए आवश्यक वस्तुओं का उत्पादन और संग्रह किया जाता था।"
    },
    {
        question: "प्रश्न 48. \"जब वह गद्दी पर बैठा तो वह शरीयत के नियमों और आदेशों से पूरी तरह स्वतंत्र था।\" बरनी ने यह कथन किस सुल्तान के लिए कहा?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: true },
            { text: "मुहम्मद बिन तुगलक", correct: false },
            { text: "सिकंदर लोदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बरनी के अनुसार, <b>अलाउद्दीन खिलजी</b> का मानना था कि राज्य के हित के लिए जो भी आवश्यक हो, वह किया जाना चाहिए।<br><br><i class='fa-solid fa-angles-right icon'></i> चाहे वह इस्लामी कानून (शरीयत) के अनुकूल हो या नहीं।"
    },
    {
        question: "प्रश्न 49. \"राजा का कोई सगा-संबंधी नहीं होता।\" यह कथन किस सुल्तान से संबंधित है?",
        answers: shuffle([
            { text: "बलबन", correct: false },
            { text: "अलाउद्दीन खिलजी", correct: false },
            { text: "इब्राहिम लोदी", correct: true },
            { text: "इल्तुतमिश", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> <b>इब्राहिम लोदी</b> ने अफगान सरदारों की समानता की भावना को खत्म करने की कोशिश की।<br><br><i class='fa-solid fa-angles-right icon'></i> और यह घोषणा की कि सुल्तान का कोई रिश्तेदार नहीं होता, सभी उसके सेवक होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i> इसी कारण अफगान अमीर उसके विरुद्ध हो गए।"
    },
    {
        question: "प्रश्न 50. सल्तनत काल में 'फवाजिल' का क्या अर्थ था?",
        answers: shuffle([
            { text: "सैनिकों को दिया जाने वाला अतिरिक्त वेतन", correct: false },
            { text: "इक्तादारों द्वारा सरकारी खजाने में जमा की जाने वाली अधिशेष राशि", correct: true },
            { text: "किसानों से वसूला जाने वाला अतिरिक्त कर", correct: false },
            { text: "बाजार में वसूला जाने वाला शुल्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> इक्तादार अपने खर्चों और वेतन को पूरा करने के बाद इक्ता से प्राप्त अतिरिक्त राजस्व को 'फवाजिल' के रूप में <b>केंद्रीय खजाने में जमा</b> करते थे।"
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