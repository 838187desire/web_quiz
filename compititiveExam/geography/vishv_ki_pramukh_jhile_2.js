const questions = [
    {
        topHeading: "विश्व की प्रमुख झीलों पर आधारित बहुविकल्पीय प्रश्न (MCQs) part 2  (quiz_no. 67)."
    },
    {
        question: "लोच नेस झील (Loch Ness) किस देश में स्थित है?",
        answers: shuffle([
            { text: "आयरलैंड", correct: false },
            { text: "स्कॉटलैंड", correct: true },
            { text: "इंग्लैंड", correct: false },
            { text: "वेल्स", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोच नेस झील स्कॉटलैंड में स्थित है और यह अपनी पौराणिक 'लोच नेस मॉन्स्टर' की कहानियों के लिए प्रसिद्ध है।"
    },
    {
        question: "टंगानिका झील कितने देशों से घिरी हुई है?",
        answers: shuffle([
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टंगानिका झील बुरुंडी, कांगो लोकतांत्रिक गणराज्य, तंजानिया और जाम्बिया की सीमाओं पर स्थित है।"
    },
    {
        question: "विश्व की सबसे बड़ी मीठे पानी की झीलों में से कौन सी झील अफ्रीका में स्थित है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "विक्टोरिया झील", correct: true },
            { text: "ह्यूरन झील", correct: false },
            { text: "मिशिगन झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया झील क्षेत्रफल की दृष्टि से विश्व की तीसरी सबसे बड़ी ताजे पानी की झील है और यह अफ्रीका में स्थित सबसे बड़ी झील है।"
    },
    {
        question: "किस झील को \"मरता हुआ सागर\" (Dying Sea) कहा जाता है?",
        answers: shuffle([
            { text: "मृत सागर", correct: false },
            { text: "अरल सागर", correct: true },
            { text: "कैस्पियन सागर", correct: false },
            { text: "वान झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरल सागर को इसके सूखने और सिकुड़ने की गंभीर स्थिति के कारण \"मरता हुआ सागर\" कहा जाता है।"
    },
    {
        question: "किस देश में 'ग्रेट लेक्स' (Great Lakes) पूरी तरह से स्थित हैं?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: false },
            { text: "रूस", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाँचों महान झीलों में से, केवल मिशिगन झील ही पूरी तरह से संयुक्त राज्य अमेरिका के भीतर स्थित है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी झीलें अमेरिका और कनाडा के बीच स्थित हैं।"
    },
    {
        question: "आयर झील (Lake Eyre) किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "ऑस्ट्रेलिया", correct: true },
            { text: "चीन", correct: false },
            { text: "दक्षिण अफ्रीका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> आयर झील ऑस्ट्रेलिया की सबसे बड़ी झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक नमक की झील है और अक्सर पूरी तरह से सूखी रहती है।"
    },
    {
        question: "किस झील का पानी कभी जम नहीं पाता है, भले ही तापमान बहुत कम हो जाए?",
        answers: shuffle([
            { text: "बैकाल झील", correct: false },
            { text: "टिटिकाका झील", correct: false },
            { text: "मृत सागर", correct: true },
            { text: "वान झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत सागर का पानी अपनी अत्यधिक लवणता के कारण बहुत कम तापमान पर भी जम नहीं पाता।"
    },
    {
        question: "किस झील को 'नील नदी का उद्गम' माना जाता है?",
        answers: shuffle([
            { text: "अल्बर्ट झील", correct: false },
            { text: "विक्टोरिया झील", correct: true },
            { text: "तुर्काना झील", correct: false },
            { text: "एडवर्ड झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> श्वेत नील नदी, जो नील नदी की दो प्रमुख सहायक नदियों में से एक है, विक्टोरिया झील से निकलती है।"
    },
    {
        question: "निम्न में से कौन सी झील विश्व की सबसे लंबी ताजे पानी की झील है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "टंगानिका झील", correct: true },
            { text: "विक्टोरिया झील", correct: false },
            { text: "मलावी झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टंगानिका झील लंबाई में 673 किमी से अधिक है, जो इसे विश्व की सबसे लंबी ताजे पानी की झील बनाती है।"
    },
    {
        question: "ओंटारियो झील किस नदी से जुड़ती है?",
        answers: shuffle([
            { text: "हडसन नदी", correct: false },
            { text: "सेंट लॉरेंस नदी", correct: true },
            { text: "मिसिसिपी नदी", correct: false },
            { text: "मैकेंजी नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओंटारियो झील से सेंट लॉरेंस नदी निकलती है, जो महान झीलों के जल को अटलांटिक महासागर तक ले जाती है।"
    },
    {
        question: "'ग्रेट साल्ट लेक' के पीछे कौन सी पर्वत श्रृंखला है?",
        answers: shuffle([
            { text: "रॉकी पर्वत", correct: true },
            { text: "एंडीज पर्वत", correct: false },
            { text: "अप्पलेशियन पर्वत", correct: false },
            { text: "सिएरा नेवाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट साल्ट लेक रॉकी पर्वत श्रृंखला के पश्चिम में स्थित है।"
    },
    {
        question: "विक्टोरिया झील किस महाद्वीप की सबसे बड़ी झील है?",
        answers: shuffle([
            { text: "एशिया", correct: false },
            { text: "अफ्रीका", correct: true },
            { text: "उत्तरी अमेरिका", correct: false },
            { text: "ऑस्ट्रेलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया झील क्षेत्रफल की दृष्टि से अफ्रीका की सबसे बड़ी झील है।"
    },
    {
        question: "किस देश में 'हजारों झीलों' का सबसे अधिक घनत्व है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "रूस", correct: false },
            { text: "फिनलैंड", correct: true },
            { text: "स्वीडन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फिनलैंड में प्रति वर्ग किलोमीटर के हिसाब से झीलों का सबसे अधिक घनत्व है, इसीलिए इसे \"हजार झीलों की भूमि\" कहा जाता है।"
    },
    {
        question: "टिटिकाका झील का पानी किस नदी में बहता है?",
        answers: shuffle([
            { text: "अमेजन नदी", correct: false },
            { text: "डेसागुएडेरो नदी", correct: true },
            { text: "उरुग्वे नदी", correct: false },
            { text: "पराग्वे नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टिटिकाका झील का पानी डेसागुएडेरो नदी के माध्यम से पोंपो झील में बहता है।"
    },
    {
        question: "अरल सागर के पानी में लवणता के बढ़ने का मुख्य कारण क्या है?",
        answers: shuffle([
            { text: "ज्वालामुखी गतिविधि", correct: false },
            { text: "नदी जल का प्रवाह कम होना", correct: true },
            { text: "समुद्र का पानी मिलना", correct: false },
            { text: "प्रदूषण", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरल सागर में पानी लाने वाली नदियों का प्रवाह कम होने से झील का जल स्तर कम हो गया और लवणता बढ़ गई।"
    },
    {
        question: "किस झील को \"संदेह का सागर\" (Sea of Doubt) भी कहा जाता है?",
        answers: shuffle([
            { text: "बालखश झील", correct: false },
            { text: "लोपनोर झील", correct: true },
            { text: "मृत सागर", correct: false },
            { text: "अरल सागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोपनोर झील, जो चीन में स्थित है, एक अस्थिर झील है जिसका स्थान समय-समय पर बदलता रहता था, इसलिए इसे \"संदेह का सागर\" कहा जाता है।"
    },
    {
        question: "विश्व की सबसे बड़ी हिमनद (glacial) झील कौन सी है?",
        answers: shuffle([
            { text: "बैकाल झील", correct: false },
            { text: "सुपीरियर झील", correct: false },
            { text: "टंगानिका झील", correct: false },
            { text: "ग्रेट बेयर झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बेयर झील कनाडा में स्थित है और इसे उत्तरी अमेरिका की सबसे बड़ी हिमनद झील माना जाता है।"
    },
    {
        question: "सुपीरियर झील और ह्यूरन झील को कौन सा जलडमरूमध्य जोड़ता है?",
        answers: shuffle([
            { text: "मैकिनैक जलडमरूमध्य", correct: false },
            { text: "नियाग्रा जलडमरूमध्य", correct: false },
            { text: "सेंट मैरीस नदी", correct: true },
            { text: "सू नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सेंट मैरीस नदी सुपीरियर झील और ह्यूरन झील को जोड़ती है, और इसके ऊपर ही सू नहर स्थित है।"
    },
    {
        question: "दुनिया की दूसरी सबसे लवणीय झील कौन सी है?",
        answers: shuffle([
            { text: "मृत सागर", correct: true },
            { text: "ग्रेट सॉल्ट लेक", correct: false },
            { text: "वान झील", correct: false },
            { text: "अससल झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत सागर तुर्की की वान झील के बाद विश्व की दूसरी सबसे लवणीय झील है।"
    },
    {
        question: "निम्न में से कौन सी झील यूनेस्को की विश्व धरोहर स्थल है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "बैकाल झील", correct: true },
            { text: "टिटिकाका झील", correct: false },
            { text: "विक्टोरिया झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैकाल झील को 1996 में यूनेस्को द्वारा विश्व धरोहर स्थल घोषित किया गया था, क्योंकि यह जैव विविधता और अद्वितीय पारिस्थितिकी तंत्र का एक महत्वपूर्ण केंद्र है।"
    },
    {
        question: "मृत सागर किस घाटी में स्थित है?",
        answers: shuffle([
            { text: "ग्रेट रिफ्ट वैली", correct: false },
            { text: "डेथ वैली", correct: false },
            { text: "जॉर्डन रिफ्ट वैली", correct: true },
            { text: "नाइल वैली", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मृत सागर जॉर्डन रिफ्ट वैली में स्थित है, जो एक दरार घाटी है।"
    },
    {
        question: "'पवन लेक' (Poyang Lake) किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "चीन", correct: true },
            { text: "जापान", correct: false },
            { text: "वियतनाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पवन झील चीन में स्थित सबसे बड़ी ताजे पानी की झील है।"
    },
    {
        question: "किस झील का पानी 'नील नदी' और 'चाड बेसिन' के बीच की सीमा पर स्थित है?",
        answers: shuffle([
            { text: "अल्बर्ट झील", correct: false },
            { text: "तुर्काना झील", correct: false },
            { text: "चाड झील", correct: true },
            { text: "विक्टोरिया झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चाड झील अफ्रीका में स्थित है और यह नील नदी और चाड बेसिन के बीच की सीमा पर स्थित है।"
    },
    {
        question: "विक्टोरिया झील का क्षेत्रफल कितना है?",
        answers: shuffle([
            { text: "59,947 वर्ग किमी", correct: false },
            { text: "68,800 वर्ग किमी", correct: true },
            { text: "82,100 वर्ग किमी", correct: false },
            { text: "90,000 वर्ग किमी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया झील का क्षेत्रफल 68,800 वर्ग किलोमीटर है, जो इसे अफ्रीका की सबसे बड़ी और विश्व की तीसरी सबसे बड़ी ताजे पानी की झील बनाता है।"
    },
    {
        question: "'लेक मिशिगन' किस देश में स्थित है?",
        answers: shuffle([
            { text: "कनाडा", correct: false },
            { text: "संयुक्त राज्य अमेरिका", correct: true },
            { text: "दोनों", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेक मिशिगन पांच महान झीलों में से एकमात्र झील है जो पूरी तरह से संयुक्त राज्य अमेरिका के भीतर स्थित है।"
    },
    {
        question: "विश्व की सबसे अधिक ऊँचाई पर स्थित ज्वालामुखी झील कौन सी है?",
        answers: shuffle([
            { text: "क्रेटर झील", correct: false },
            { text: "टोबा झील", correct: false },
            { text: "लेक ओजोस डेल सलाडो", correct: true },
            { text: "लेक टिटिकाका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ओजोस डेल सलाडो झील अर्जेंटीना और चिली की सीमा पर स्थित एक ज्वालामुखी झील है, जो विश्व की सबसे अधिक ऊँचाई पर स्थित ज्वालामुखी झील है।"
    },
    {
        question: "सुपीरियर झील किन दो देशों की सीमा बनाती है?",
        answers: shuffle([
            { text: "संयुक्त राज्य अमेरिका और मैक्सिको", correct: false },
            { text: "कनाडा और संयुक्त राज्य अमेरिका", correct: true },
            { text: "कनाडा और अलास्का", correct: false },
            { text: "रूस और कनाडा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपीरियर झील, पाँच महान झीलों में से सबसे बड़ी, कनाडा और संयुक्त राज्य अमेरिका के बीच की सीमा बनाती है।"
    },
    {
        question: "किस झील को \"झीलों की रानी\" कहा जाता है?",
        answers: shuffle([
            { text: "विक्टोरिया झील", correct: true },
            { text: "बैकाल झील", correct: false },
            { text: "सुपीरियर झील", correct: false },
            { text: "टिटिकाका झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया झील को उसकी विशालता और जैविक विविधता के कारण \"झीलों की रानी\" कहा जाता है।"
    },
    {
        question: "निम्न में से कौन सी झील विश्व की सबसे बड़ी मीठे पानी की झीलों में से एक नहीं है?",
        answers: shuffle([
            { text: "ग्रेट स्लेव झील", correct: true },
            { text: "विक्टोरिया झील", correct: false },
            { text: "टंगानिका झील", correct: false },
            { text: "बैकाल झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट स्लेव झील कनाडा की एक विशाल झील है, लेकिन यह शीर्ष 5 सबसे बड़ी मीठे पानी की झीलों में शामिल नहीं है।"
    },
    {
        question: "किस झील में दुनिया का सबसे बड़ा नदी डेल्टा बनता है?",
        answers: shuffle([
            { text: "कैस्पियन सागर", correct: true },
            { text: "अरल सागर", correct: false },
            { text: "महान स्लेव झील", correct: false },
            { text: "चाड झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्पियन सागर में गिरने वाली वोल्गा नदी का डेल्टा विश्व का सबसे बड़ा डेल्टा है।"
    },
    {
        question: "'ग्रेट बेयर झील' का पानी किस नदी में बहता है?",
        answers: shuffle([
            { text: "मैकेंजी नदी", correct: true },
            { text: "युकॉन नदी", correct: false },
            { text: "फ्रेंकलिन नदी", correct: false },
            { text: "नेल्सन नदी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बेयर झील का पानी मैकेंजी नदी के माध्यम से आर्कटिक महासागर में गिरता है।"
    },
    {
        question: "निम्न में से किस झील का पानी खारा नहीं है?",
        answers: shuffle([
            { text: "ग्रेट सॉल्ट लेक", correct: false },
            { text: "अरल सागर", correct: false },
            { text: "कैस्पियन सागर", correct: false },
            { text: "बैकाल झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैकाल झील विश्व की सबसे बड़ी ताजे पानी की झील है।<br><br><i class='fa-solid fa-angles-right icon'></i> अन्य सभी झीलें खारे पानी की झीलें हैं।"
    },
    {
        question: "'लेक माराकाइबो' (Lake Maracaibo) किस देश में स्थित है?",
        answers: shuffle([
            { text: "ब्राजील", correct: false },
            { text: "वेनेजुएला", correct: true },
            { text: "कोलम्बिया", correct: false },
            { text: "पेरू", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> माराकाइबो झील वेनेजुएला में स्थित है और यह तेल और गैस के भंडार के लिए जानी जाती है।"
    },
    {
        question: "विश्व की सबसे बड़ी स्थलीय झील कौन सी है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "अरल सागर", correct: false },
            { text: "कैस्पियन सागर", correct: true },
            { text: "विक्टोरिया झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्पियन सागर चारों ओर से भूमि से घिरा है, इसलिए इसे विश्व की सबसे बड़ी स्थलीय झील माना जाता है।"
    },
    {
        question: "'वोस्टोक झील' को किसने खोजा था?",
        answers: shuffle([
            { text: "रूसी वैज्ञानिकों ने", correct: true },
            { text: "अमेरिकी वैज्ञानिकों ने", correct: false },
            { text: "ब्रिटिश वैज्ञानिकों ने", correct: false },
            { text: "ऑस्ट्रेलियाई वैज्ञानिकों ने", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> वोस्तोक झील को 1990 के दशक में रूसी वैज्ञानिकों द्वारा अंटार्कटिका में बर्फ की चादर के नीचे खोजा गया था।"
    },
    {
        question: "'पंगोंग त्सो झील' (Pangong Tso Lake) किस देश में स्थित है?",
        answers: shuffle([
            { text: "भारत", correct: false },
            { text: "नेपाल", correct: false },
            { text: "भूटान", correct: false },
            { text: "चीन और भारत", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पंगोंग त्सो झील हिमालय में स्थित एक लंबी, संकरी और खारे पानी की झील है, जिसकी सीमा भारत (लद्दाख) और चीन (तिब्बत) के बीच विभाजित है।"
    },
    {
        question: "विश्व की सबसे बड़ी हिमनद झील कौन सी है?",
        answers: shuffle([
            { text: "बैकाल झील", correct: false },
            { text: "सुपीरियर झील", correct: false },
            { text: "टंगानिका झील", correct: false },
            { text: "ग्रेट बेयर झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बेयर झील उत्तरी अमेरिका की सबसे बड़ी हिमनद झील है।"
    },
    {
        question: "विश्व की सबसे बड़ी खारे पानी की झील 'कैस्पियन सागर' की अधिकतम गहराई कितनी है?",
        answers: shuffle([
            { text: "500 मीटर", correct: false },
            { text: "800 मीटर", correct: false },
            { text: "1025 मीटर", correct: true },
            { text: "1500 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> कैस्पियन सागर की अधिकतम गहराई लगभग 1025 मीटर है।"
    },
    {
        question: "निम्न में से कौन सी झील 'द ग्रेट लेक्स' का हिस्सा नहीं है?",
        answers: shuffle([
            { text: "सुपीरियर झील", correct: false },
            { text: "ह्यूरन झील", correct: false },
            { text: "एरी झील", correct: false },
            { text: "विनिपेग झील", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विनिपेग झील कनाडा में स्थित है और इसे 'द ग्रेट लेक्स' का हिस्सा नहीं माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'द ग्रेट लेक्स' में सुपीरियर, मिशिगन, ह्यूरन, एरी और ओंटारियो झीलें शामिल हैं।"
    },
    {
        question: "निम्न में से कौन सी झील पूरी तरह से एक देश में स्थित है?",
        answers: shuffle([
            { text: "विक्टोरिया झील", correct: false },
            { text: "कैस्पियन सागर", correct: false },
            { text: "मिशिगन झील", correct: true },
            { text: "ग्रेट सॉल्ट लेक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मिशिगन झील पूरी तरह से संयुक्त राज्य अमेरिका के अंदर स्थित है।"
    },
    {
        question: "'लेक चिलिका' (Chilika Lake) किस देश में स्थित है?",
        answers: shuffle([
            { text: "नेपाल", correct: false },
            { text: "बांग्लादेश", correct: false },
            { text: "भारत", correct: true },
            { text: "श्रीलंका", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> चिलिका झील भारत के ओडिशा राज्य में स्थित है और यह एशिया की सबसे बड़ी खारे पानी की लैगून झील है।"
    },
    {
        question: "विश्व की सबसे लवणीय झीलों में से एक 'अससल झील' (Lake Assal) किस देश में स्थित है?",
        answers: shuffle([
            { text: "मिस्र", correct: false },
            { text: "सोमालिया", correct: false },
            { text: "इथियोपिया", correct: false },
            { text: "जिबूती", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अससल झील जिबूती में स्थित है और यह वान झील और मृत सागर के बाद विश्व की सबसे लवणीय झीलों में से एक है।"
    },
    {
        question: "किस झील को \"मरुस्थलीय झील\" कहा जाता है?",
        answers: shuffle([
            { text: "लोपनोर झील", correct: false },
            { text: "तुर्काना झील", correct: false },
            { text: "चाड झील", correct: false },
            { text: "उपरोक्त सभी", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लोपनोर, तुर्काना और चाड जैसी झीलें, जो रेगिस्तानी या अर्ध-शुष्क क्षेत्रों में स्थित हैं, उन्हें \"मरुस्थलीय झीलें\" कहा जाता है।"
    },
    {
        question: "विक्टोरिया झील किस प्रकार के जलीय जीवन के लिए प्रसिद्ध है?",
        answers: shuffle([
            { text: "साल्मन मछली", correct: false },
            { text: "क्रोकोडाइल", correct: false },
            { text: "सिचलिड (Cichlid) मछली", correct: true },
            { text: "कछुए", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> विक्टोरिया झील अपनी अत्यधिक जैव विविधता, विशेष रूप से सिचलिड मछलियों की प्रजातियों के लिए प्रसिद्ध है।"
    },
    {
        question: "'लेक टिटिकाका' की औसत गहराई कितनी है?",
        answers: shuffle([
            { text: "50 मीटर", correct: false },
            { text: "100 मीटर", correct: false },
            { text: "150 मीटर", correct: true },
            { text: "200 मीटर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> लेक टिटिकाका की औसत गहराई लगभग 150 मीटर है।"
    },
    {
        question: "किस झील का जल स्तर 1960 के बाद से 90% से अधिक कम हो गया है?",
        answers: shuffle([
            { text: "मृत सागर", correct: false },
            { text: "अरल सागर", correct: true },
            { text: "चाड झील", correct: false },
            { text: "वान झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अरल सागर का जल स्तर सिंचाई के लिए नदी के पानी के मोड़ के कारण नाटकीय रूप से कम हो गया है।"
    },
    {
        question: "'ग्रेट बेयर झील' का पानी किस महासागर में बहता है?",
        answers: shuffle([
            { text: "प्रशांत महासागर", correct: false },
            { text: "अटलांटिक महासागर", correct: false },
            { text: "आर्कटिक महासागर", correct: true },
            { text: "हिंद महासागर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेट बेयर झील से मैकेंजी नदी निकलती है, जो आर्कटिक महासागर में गिरती है।"
    },
    {
        question: "किस झील को \"लौह अयस्क का सागर\" (Sea of Iron Ore) कहा जाता है?",
        answers: shuffle([
            { text: "कैस्पियन सागर", correct: false },
            { text: "बैकाल झील", correct: false },
            { text: "सुपीरियर झील", correct: true },
            { text: "लेक माराकाइबो", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> सुपीरियर झील के किनारे भारी मात्रा में लौह अयस्क के भंडार पाए जाते हैं, जिसके कारण इसे 'लौह अयस्क का सागर' भी कहा जाता है।"
    },
    {
        question: "निम्न में से कौन सी झील 'द ग्रेट लेक्स' में से एक है और पूरी तरह से कनाडा में स्थित है?",
        answers: shuffle([
            { text: "ग्रेट बेयर झील", correct: false },
            { text: "ग्रेट स्लेव झील", correct: false },
            { text: "ओंटारियो झील", correct: false },
            { text: "इनमें से कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पाँच महान झीलों (ग्रेट लेक्स) में से कोई भी झील पूरी तरह से कनाडा में स्थित नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> सभी झीलें अमेरिका और कनाडा के बीच की सीमा पर स्थित हैं, सिवाय मिशिगन झील के, जो पूरी तरह से अमेरिका में है।"
    },
    {
        question: "अफ्रीका की 'ग्रेट रिफ्ट वैली' में कौन सी झील स्थित है?",
        answers: shuffle([
            { text: "विक्टोरिया झील", correct: false },
            { text: "टिटिकाका झील", correct: false },
            { text: "मलावी झील", correct: true },
            { text: "मिशिगन झील", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मलावी झील (न्यासा झील) अफ्रीकी ग्रेट रिफ्ट वैली में स्थित है।"
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