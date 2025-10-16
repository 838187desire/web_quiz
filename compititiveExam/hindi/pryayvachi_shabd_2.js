const questions = [
    {
        topHeading: "पर्यायवाची शब्दों पर आधारित 50 MCQs, part_2 (quiz_no.)"
    },
    {
        question: "प्रश्न 1. 'नयन' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "हाथ", correct: false },
            { text: "पैर", correct: false },
            { text: "आँख", correct: true },
            { text: "कान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नयन' शब्द का अर्थ आँख होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अन्य पर्यायवाची शब्द नेत्र, लोचन, चक्षु और दृग हैं।"
    },
    {
        question: "प्रश्न 2. निम्नलिखित में से कौन सा शब्द 'आँख' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "चक्षु", correct: false },
            { text: "लोचन", correct: false },
            { text: "दृग", correct: false },
            { text: "पग", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पग' शब्द 'पैर' का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि चक्षु, लोचन और दृग 'आँख' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 3. 'दृग' का पर्यायवाची शब्द समूह चुनिए।",
        answers: shuffle([
            { text: "नेत्र, नयन, लोचन", correct: true },
            { text: "कर, हस्त, पाणि", correct: false },
            { text: "पद, चरण, पाद", correct: false },
            { text: "तन, देह, काया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दृग' का अर्थ आँख होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> और नेत्र, नयन, लोचन भी आँख के पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 4. 'हस्त' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "सिर", correct: false },
            { text: "हाथ", correct: true },
            { text: "पैर", correct: false },
            { text: "पेट", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हस्त' शब्द 'हाथ' का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> कर, पाणि, बाहु, भुजा भी हाथ के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 5. इनमें से कौन सा शब्द 'हाथ' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "कर", correct: false },
            { text: "बाहु", correct: false },
            { text: "पाद", correct: true },
            { text: "पाणि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पाद' पैर का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> कर, बाहु और पाणि 'हाथ' के पर्यायवाची शब्द हैं।"
    },
    {
        question: "प्रश्न 6. 'भुजा' शब्द का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "माँ, जननी, अंबा", correct: false },
            { text: "कर, हस्त, पाणि", correct: true },
            { text: "बेटा, सुत, तनय", correct: false },
            { text: "दोस्त, सखा, सहचर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भुजा' का अर्थ हाथ होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> कर, हस्त और पाणि भी हाथ के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 7. 'पद' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "शरीर", correct: false },
            { text: "सिर", correct: false },
            { text: "हाथ", correct: false },
            { text: "पैर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पद' शब्द का अर्थ पैर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> इसके अन्य पर्यायवाची चरण, पाद, पग और टाँग हैं।"
    },
    {
        question: "प्रश्न 8. निम्नलिखित में से कौन सा 'पैर' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "चरण", correct: false },
            { text: "पग", correct: false },
            { text: "हस्त", correct: true },
            { text: "टाँग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'हस्त' हाथ का पर्यायवाची है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि चरण, पग और टाँग 'पैर' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 9. 'पग' और 'चरण' किसके पर्यायवाची शब्द हैं?",
        answers: shuffle([
            { text: "हाथ", correct: false },
            { text: "आँख", correct: false },
            { text: "पैर", correct: true },
            { text: "शरीर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पग' और 'चरण' दोनों ही शब्द 'पैर' के लिए प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 10. 'काया' शब्द का पर्यायवाची है:",
        answers: shuffle([
            { text: "आत्मा", correct: false },
            { text: "मन", correct: false },
            { text: "शरीर", correct: true },
            { text: "धन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'काया' का अर्थ शरीर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तन, देह, वपु, गात इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 11. इनमें से कौन सा शब्द 'शरीर' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "तन", correct: false },
            { text: "देह", correct: false },
            { text: "गात", correct: false },
            { text: "रिपु", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रिपु' का अर्थ शत्रु होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तन, देह और गात 'शरीर' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 12. 'वपु' और 'गात' शब्द किस शब्द के पर्यायवाची हैं?",
        answers: shuffle([
            { text: "देवता", correct: false },
            { text: "मनुष्य", correct: false },
            { text: "शरीर", correct: true },
            { text: "असुर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वपु' और 'गात' दोनों का अर्थ शरीर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसके अन्य पर्यायवाची तन और देह हैं।"
    },
    {
        question: "प्रश्न 13. 'जननी' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "पुत्री", correct: false },
            { text: "पत्नी", correct: false },
            { text: "माता", correct: true },
            { text: "बहन", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जननी' का अर्थ जन्म देने वाली अर्थात् माता होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> माँ, अंबा, धात्री, प्रसूता इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 14. निम्नलिखित में से कौन सा 'माता' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "अंबा", correct: false },
            { text: "प्रसूता", correct: false },
            { text: "धात्री", correct: false },
            { text: "तनया", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तनया' का अर्थ पुत्री होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अंबा, प्रसूता और धात्री 'माता' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 15. 'प्रसूता' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "माँ, जननी, अंबा", correct: true },
            { text: "बेटी, सुता, तनया", correct: false },
            { text: "दोस्त, सखा, मीत", correct: false },
            { text: "दुश्मन, रिपु, अरि", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रसूता' का अर्थ जन्म देने वाली यानी माता होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> माँ, जननी और अंबा भी माता के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 16. 'जनक' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "पुत्र", correct: false },
            { text: "पिता", correct: true },
            { text: "मित्र", correct: false },
            { text: "भाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जनक' का अर्थ जन्म देने वाला अर्थात् पिता होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तात, पितृ, बाप, वालिद इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 17. इनमें से कौन सा शब्द 'पिता' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "तात", correct: false },
            { text: "पितृ", correct: false },
            { text: "सुत", correct: true },
            { text: "वालिद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुत' का अर्थ पुत्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> तात, पितृ और वालिद 'पिता' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 18. 'वालिद' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "माता", correct: false },
            { text: "पुत्र", correct: false },
            { text: "पिता", correct: true },
            { text: "मित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वालिद' एक उर्दू शब्द है जिसका अर्थ पिता होता है।"
    },
    {
        question: "प्रश्न 19. 'तनय' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "पुत्री", correct: false },
            { text: "पिता", correct: false },
            { text: "पुत्र", correct: true },
            { text: "माता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तनय' का अर्थ पुत्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बेटा, सुत, आत्मज, नंदन इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 20. निम्नलिखित में से कौन सा 'पुत्र' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "सुत", correct: false },
            { text: "आत्मज", correct: false },
            { text: "नंदन", correct: false },
            { text: "आत्मजा", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आत्मजा' का अर्थ पुत्री होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि सुत, आत्मज और नंदन 'पुत्र' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 21. 'नंदन' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "बेटी, सुता, तनया", correct: false },
            { text: "बेटा, सुत, तनय", correct: true },
            { text: "माँ, जननी, अंबा", correct: false },
            { text: "तात, जनक, पितृ", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नंदन' का अर्थ पुत्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बेटा, सुत और तनय भी पुत्र के ही पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 22. 'आत्मजा' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "पुत्र", correct: false },
            { text: "माता", correct: false },
            { text: "पुत्री", correct: true },
            { text: "पिता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'आत्मजा' का अर्थ पुत्री होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> बेटी, सुता, तनया, दुहिता इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 23. इनमें से कौन सा शब्द 'पुत्री' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "सुता", correct: false },
            { text: "तनय", correct: true },
            { text: "दुहिता", correct: false },
            { text: "बेटी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तनय' का अर्थ पुत्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सुता, दुहिता और बेटी 'पुत्री' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 24. 'दुहिता' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "पुत्र", correct: false },
            { text: "पुत्री", correct: true },
            { text: "बहन", correct: false },
            { text: "पत्नी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दुहिता' का अर्थ पुत्री होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह एक तत्सम शब्द है।"
    },
    {
        question: "प्रश्न 25. 'सखा' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "शत्रु", correct: false },
            { text: "मित्र", correct: true },
            { text: "भाई", correct: false },
            { text: "गुरु", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सखा' का अर्थ मित्र या दोस्त होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सहचर, मीत, सुहृद इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 26. निम्नलिखित में से कौन सा 'मित्र' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "सहचर", correct: false },
            { text: "मीत", correct: false },
            { text: "अरि", correct: true },
            { text: "सुहृद", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अरि' का अर्थ शत्रु होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि सहचर, मीत और सुहृद 'मित्र' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 27. 'सुहृद' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "दुश्मन, रिपु, वैरी", correct: false },
            { text: "दोस्त, सखा, मीत", correct: true },
            { text: "देव, अमर, सुर", correct: false },
            { text: "दैत्य, दानव, राक्षस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुहृद' का अर्थ अच्छा हृदय वाला अर्थात् मित्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दोस्त, सखा और मीत भी मित्र के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 28. 'रिपु' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "मित्र", correct: false },
            { text: "देवता", correct: false },
            { text: "असुर", correct: false },
            { text: "शत्रु", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रिपु' का अर्थ शत्रु या दुश्मन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अरि, वैरी, विद्वेषी इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 29. इनमें से कौन सा शब्द 'शत्रु' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "अरि", correct: false },
            { text: "वैरी", correct: false },
            { text: "सखा", correct: true },
            { text: "विद्वेषी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सखा' का अर्थ मित्र होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अरि, वैरी और विद्वेषी 'शत्रु' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 30. 'वैरी' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "दोस्त", correct: false },
            { text: "भाई", correct: false },
            { text: "शत्रु", correct: true },
            { text: "पिता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'वैरी' का अर्थ बैर रखने वाला अर्थात् शत्रु होता है।"
    },
    {
        question: "प्रश्न 31. 'सुर' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "असुर", correct: false },
            { text: "मानव", correct: false },
            { text: "देवता", correct: true },
            { text: "राक्षस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुर' का अर्थ देवता होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> देव, अमर, निर्झर, विबुध इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 32. निम्नलिखित में से कौन सा 'देवता' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "अमर", correct: false },
            { text: "निर्झर", correct: false },
            { text: "विबुध", correct: false },
            { text: "निशाचर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निशाचर' का अर्थ रात में घूमने वाला अर्थात् राक्षस होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अमर, निर्झर और विबुध 'देवता' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 33. 'अमर' का सही पर्यायवाची समूह कौन सा है?",
        answers: shuffle([
            { text: "सुर, देव, विबुध", correct: true },
            { text: "दैत्य, दानव, राक्षस", correct: false },
            { text: "मानव, नर, जन", correct: false },
            { text: "भगवान, प्रभु, परमात्मा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अमर' का अर्थ जो कभी न मरे अर्थात् देवता होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सुर, देव और विबुध भी देवता के पर्यायवाची हैं。"
    },
    {
        question: "प्रश्न 34. 'दानव' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "देवता", correct: false },
            { text: "मनुष्य", correct: false },
            { text: "ईश्वर", correct: false },
            { text: "असुर", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दानव' का अर्थ असुर या राक्षस होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दैत्य, निशाचर, रजनीचर इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 35. इनमें से कौन सा शब्द 'असुर' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "दैत्य", correct: false },
            { text: "राक्षस", correct: false },
            { text: "सुर", correct: true },
            { text: "रजनीचर", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुर' का अर्थ देवता होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> दैत्य, राक्षस और रजनीचर 'असुर' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 36. 'निशाचर' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "दिन में घूमने वाला", correct: false },
            { text: "रात में घूमने वाला", correct: true },
            { text: "आकाश में घूमने वाला", correct: false },
            { text: "जल में रहने वाला", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निशा' का अर्थ रात और 'चर' का अर्थ घूमने वाला होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> अतः 'निशाचर' का अर्थ राक्षस या असुर है।"
    },
    {
        question: "प्रश्न 37. 'मनुज' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "जानवर", correct: false },
            { text: "पक्षी", correct: false },
            { text: "मनुष्य", correct: true },
            { text: "देवता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मनुज' का अर्थ मनुष्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> मानव, नर, जन, इंसान इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 38. निम्नलिखित में से कौन सा 'मनुष्य' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "मानव", correct: false },
            { text: "जन", correct: false },
            { text: "दानव", correct: true },
            { text: "इंसान", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दानव' का अर्थ असुर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि मानव, जन और इंसान 'मनुष्य' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 39. 'नर' और 'जन' किसके पर्यायवाची शब्द हैं?",
        answers: shuffle([
            { text: "ईश्वर", correct: false },
            { text: "मनुष्य", correct: true },
            { text: "असुर", correct: false },
            { text: "मित्र", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'नर' और 'जन' दोनों ही शब्द 'मनुष्य' के लिए प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 40. 'प्रभु' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "राजा", correct: false },
            { text: "गुरु", correct: false },
            { text: "ईश्वर", correct: true },
            { text: "सेवक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'प्रभु' का अर्थ स्वामी या ईश्वर होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> भगवान, परमात्मा, जगदीश, विभु इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 41. इनमें से कौन सा शब्द 'ईश्वर' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "परमात्मा", correct: false },
            { text: "जगदीश", correct: false },
            { text: "विभु", correct: false },
            { text: "मनुज", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मनुज' का अर्थ मनुष्य होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> परमात्मा, जगदीश और विभु 'ईश्वर' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 42. 'जगदीश' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "जगत का राजा", correct: false },
            { text: "जगत का ईश्वर", correct: true },
            { text: "जगत का पिता", correct: false },
            { text: "जगत का सेवक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'जगत्' + 'ईश' = जगदीश।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ है संसार का स्वामी अर्थात् ईश्वर।"
    },
    {
        question: "प्रश्न 43. 'निशा' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "दिन", correct: false },
            { text: "सुबह", correct: false },
            { text: "शाम", correct: false },
            { text: "रात", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'निशा' का अर्थ रात होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> रात्रि, रजनी, यामिनी, विभावरी इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 44. निम्नलिखित में से कौन सा 'रात' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "रजनी", correct: false },
            { text: "यामिनी", correct: false },
            { text: "दिवा", correct: true },
            { text: "विभावरी", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिवा' का अर्थ दिन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि रजनी, यामिनी और विभावरी 'रात' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 45. 'यामिनी' और 'विभावरी' किसके पर्यायवाची शब्द हैं?",
        answers: shuffle([
            { text: "सुबह", correct: false },
            { text: "दिन", correct: false },
            { text: "रात", correct: true },
            { text: "शाम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'यामिनी' और 'विभावरी' दोनों ही शब्द 'रात' के लिए प्रयुक्त होते हैं।"
    },
    {
        question: "प्रश्न 46. 'दिवस' किसका पर्यायवाची शब्द है?",
        answers: shuffle([
            { text: "महीना", correct: false },
            { text: "सप्ताह", correct: false },
            { text: "वर्ष", correct: false },
            { text: "दिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिवस' का अर्थ दिन होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वार, वासर, अह्न, दिवा इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 47. इनमें से कौन सा शब्द 'दिन' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "वार", correct: false },
            { text: "वासर", correct: false },
            { text: "रजनी", correct: true },
            { text: "दिवा", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'रजनी' का अर्थ रात होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> वार, वासर और दिवा 'दिन' के पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 48. 'अह्न' शब्द का अर्थ क्या है?",
        answers: shuffle([
            { text: "रात", correct: false },
            { text: "शाम", correct: false },
            { text: "सुबह", correct: false },
            { text: "दिन", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'अह्न' एक तत्सम शब्द है।<br><br><i class='fa-solid fa-angles-right icon'></i> जिसका अर्थ दिन होता है।"
    },
    {
        question: "प्रश्न 49. 'भोर' शब्द का पर्यायवाची क्या है?",
        answers: shuffle([
            { text: "दोपहर", correct: false },
            { text: "शाम", correct: false },
            { text: "सुबह", correct: true },
            { text: "रात", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भोर' का अर्थ सुबह या प्रातःकाल होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> सवेरा, अरुणोदय, उषा इसके अन्य पर्यायवाची हैं।"
    },
    {
        question: "प्रश्न 50. निम्नलिखित में से कौन सा 'सुबह' का पर्यायवाची नहीं है?",
        answers: shuffle([
            { text: "प्रातः", correct: false },
            { text: "उषा", correct: false },
            { text: "अरुणोदय", correct: false },
            { text: "संध्या", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'संध्या' का अर्थ शाम होता है।<br><br><i class='fa-solid fa-angles-right icon'></i> जबकि प्रातः, उषा और अरुणोदय 'सुबह' के पर्यायवाची हैं।"
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