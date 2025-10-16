const questions = [
    {
        topHeading: "मेंडल के नियमों पर आधारित 30 MCQs (quiz_no.)"
    },
    {
        question: "प्रश्न 1. आनुवंशिकी (Genetics) का जनक किसे कहा जाता है?",
        answers: shuffle([
            { text: "चार्ल्स डार्विन", correct: false },
            { text: "ग्रेगर मेंडल", correct: true },
            { text: "जे.बी.एस. हल्दाने", correct: false },
            { text: "लैमार्क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ग्रेगर मेंडल को उनके मटर के पौधों पर किए गए अभूतपूर्व कार्यों के लिए आनुवंशिकी का जनक माना जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिससे आनुवंशिकता के मूल सिद्धांत सामने आए।"
    },
    {
        question: "प्रश्न 2. मेंडल ने अपने प्रयोगों के लिए किस पौधे का चयन किया?",
        answers: shuffle([
            { text: "गुलाब", correct: false },
            { text: "गेंदा", correct: false },
            { text: "मटर (पाइसम सैटाइवम)", correct: true },
            { text: "गेहूं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेंडल ने अपने प्रयोगों के लिए मटर के पौधे (Pisum sativum) का उपयोग किया।<br><br><i class='fa-solid fa-angles-right icon'></i>  क्योंकि इसमें कई स्पष्ट रूप से भिन्न लक्षण थे और इसका जीवन चक्र छोटा था।"
    },
    {
        question: "प्रश्न 3. मेंडल का 'प्रभाविता का नियम' (Law of Dominance) क्या कहता है?",
        answers: shuffle([
            { text: "एक संकर क्रॉस में, F1 पीढ़ी में केवल एक जनक का लक्षण दिखाई देता है।", correct: true },
            { text: "लक्षण हमेशा मिश्रित होते हैं।", correct: false },
            { text: "दोनों जनकों के लक्षण F1 पीढ़ी में दिखाई देते हैं।", correct: false },
            { text: "लक्षण अगली पीढ़ी में गायब हो जाते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रभाविता के नियम के अनुसार, जब दो अलग-अलग एलील मौजूद होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो केवल एक (प्रभावी एलील) ही जीव के फेनोटाइप में व्यक्त होता है, जबकि दूसरा (अप्रभावी एलील) छिपा रहता है।"
    },
    {
        question: "प्रश्न 4. जब एक लंबे (TT) और एक बौने (tt) मटर के पौधे के बीच संकरण कराया जाता है, तो F1 पीढ़ी में सभी पौधे लंबे क्यों होते हैं?",
        answers: shuffle([
            { text: "बौनापन एक अप्रभावी लक्षण है।", correct: true },
            { text: "लंबापन एक अप्रभावी लक्षण है।", correct: false },
            { text: "दोनों लक्षण मिश्रित हो जाते हैं।", correct: false },
            { text: "यह एक संयोग है।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> F1 पीढ़ी में जीनोटाइप (Tt) होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  चूँकि लंबापन (T) बौनेपन (t) पर प्रभावी है, इसलिए सभी पौधे लंबे दिखाई देते हैं।"
    },
    {
        question: "प्रश्न 5. मेंडल का 'पृथक्करण का नियम' (Law of Segregation) किस पर आधारित है?",
        answers: shuffle([
            { text: "युग्मक हमेशा शुद्ध होते हैं।", correct: true },
            { text: "लक्षण एक साथ रहते हैं।", correct: false },
            { text: "युग्मकों का निर्माण नहीं होता है।", correct: false },
            { text: "लक्षण मिश्रित हो जाते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पृथक्करण के नियम के अनुसार, युग्मक निर्माण के दौरान, प्रत्येक जीन के दो एलील एक-दूसरे से अलग हो जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि प्रत्येक युग्मक को प्रत्येक जीन के लिए केवल एक ही एलील प्राप्त हो।"
    },
    {
        question: "प्रश्न 6. एक मोनोहाइब्रिड क्रॉस (Monohybrid Cross) में F2 पीढ़ी का फेनोटाइपिक अनुपात (phenotypic ratio) क्या होता है?",
        answers: shuffle([
            { text: "1:2:1", correct: false },
            { text: "9:3:3:1", correct: false },
            { text: "3:1", correct: true },
            { text: "1:1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक क्लासिक मोनोहाइब्रिड क्रॉस में, F2 पीढ़ी में फेनोटाइपिक अनुपात 3 (प्रभावी लक्षण वाले) : 1 (अप्रभावी लक्षण वाले) होता है।"
    },
    {
        question: "प्रश्न 7. एक मोनोहाइब्रिड क्रॉस में F2 पीढ़ी का जीनोटाइपिक अनुपात (genotypic ratio) क्या होता है?",
        answers: shuffle([
            { text: "3:1", correct: false },
            { text: "9:3:3:1", correct: false },
            { text: "1:1:1:1", correct: false },
            { text: "1:2:1", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> F2 पीढ़ी में जीनोटाइपिक अनुपात 1 (समयग्मजी प्रभावी, TT) : 2 (विषमयुग्मजी, Tt) : 1 (समयग्मजी अप्रभावी, tt) होता है।"
    },
    {
        question: "प्रश्न 8. मेंडल का 'स्वतंत्र अपव्यूहन का नियम' (Law of Independent Assortment) किस प्रकार के क्रॉस पर लागू होता है?",
        answers: shuffle([
            { text: "मोनोहाइब्रिड क्रॉस", correct: false },
            { text: "डाइहाइब्रिड क्रॉस", correct: true },
            { text: "टेस्ट क्रॉस", correct: false },
            { text: "बैक क्रॉस", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वतंत्र अपव्यूहन का नियम बताता है कि विभिन्न लक्षणों के जीन एक-दूसरे से स्वतंत्र रूप से युग्मकों में जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसे प्रदर्शित करने के लिए कम से कम दो लक्षणों (डाइहाइब्रिड क्रॉस) का अध्ययन आवश्यक है।"
    },
    {
        question: "प्रश्न 9. डाइहाइब्रिड क्रॉस में F2 पीढ़ी का फेनोटाइपिक अनुपात क्या होता है?",
        answers: shuffle([
            { text: "3:1", correct: false },
            { text: "1:2:1", correct: false },
            { text: "9:3:3:1", correct: true },
            { text: "1:1", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एक डाइहाइब्रिड क्रॉस में, जब दो विषमयुग्मजी (जैसे, RrYy) का स्व-परागण होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  तो F2 पीढ़ी में चार अलग-अलग फेनोटाइप 9:3:3:1 के अनुपात में उत्पन्न होते हैं।"
    },
    {
        question: "प्रश्न 10. 'एलील' (Allele) शब्द का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक जीन का वैकल्पिक रूप", correct: true },
            { text: "एक गुणसूत्र का हिस्सा", correct: false },
            { text: "एक प्रकार का प्रोटीन", correct: false },
            { text: "एक कोशिकांग", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> एलील एक ही जीन के विभिन्न संस्करण होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो एक विशिष्ट लक्षण के भिन्न रूपों को नियंत्रित करते हैं, जैसे फूल के रंग के लिए बैंगनी और सफेद एलील।"
    },
    {
        question: "प्रश्न 11. जब किसी जीव में एक जीन के दोनों एलील समान होते हैं, तो उसे क्या कहा जाता है?",
        answers: shuffle([
            { text: "विषमयुग्मजी (Heterozygous)", correct: false },
            { text: "समयुग्मजी (Homozygous)", correct: true },
            { text: "अगुणित (Haploid)", correct: false },
            { text: "द्विगुणित (Diploid)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> समयुग्मजी एक ऐसी स्थिति है जहाँ एक जीव के पास एक विशेष लक्षण के लिए दो समान एलील (जैसे TT या tt) होते हैं।"
    },
    {
        question: "प्रश्न 12. किसी जीव की आनुवंशिक संरचना को क्या कहते हैं?",
        answers: shuffle([
            { text: "फेनोटाइप (Phenotype)", correct: false },
            { text: "जीनोटाइप (Genotype)", correct: true },
            { text: "जीनोम (Genome)", correct: false },
            { text: "कैरियोटाइप (Karyotype)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> जीनोटाइप एक जीव के एलील्स के संयोजन को संदर्भित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उसकी आनुवंशिक बनावट है।"
    },
    {
        question: "प्रश्न 13. किसी जीव के अवलोकन योग्य लक्षणों (observable traits) को क्या कहा जाता है?",
        answers: shuffle([
            { text: "जीनोटाइप", correct: false },
            { text: "फेनोटाइप", correct: true },
            { text: "कैरियोटाइप", correct: false },
            { text: "प्रोटिओम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> फेनोटाइप किसी जीव के देखने योग्य भौतिक या जैव रासायनिक लक्षण हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो उसके जीनोटाइप और पर्यावरणीय कारकों के परस्पर प्रभाव का परिणाम होते हैं।"
    },
    {
        question: "प्रश्न 14. टेस्ट क्रॉस (Test Cross) का उद्देश्य क्या है?",
        answers: shuffle([
            { text: "अप्रभावी जनक का जीनोटाइप निर्धारित करना", correct: false },
            { text: "प्रभावी फेनोटाइप वाले जीव का जीनोटाइप निर्धारित करना", correct: true },
            { text: "F2 पीढ़ी का अनुपात जानना", correct: false },
            { text: "नए लक्षण उत्पन्न करना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> टेस्ट क्रॉस में, एक अज्ञात जीनोटाइप वाले प्रभावी फेनोटाइप के जीव का संकरण एक समयुग्मजी अप्रभावी जीव के साथ किया जाता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  ताकि यह पता चल सके कि वह समयुग्मजी प्रभावी है या विषमयुग्मजी।"
    },
    {
        question: "प्रश्न 15. अपूर्ण प्रभाविता (Incomplete Dominance) में, विषमयुग्मजी का फेनोटाइप कैसा होता है?",
        answers: shuffle([
            { text: "प्रभावी जनक जैसा", correct: false },
            { text: "अप्रभावी जनक जैसा", correct: false },
            { text: "दोनों जनकों का मध्यवर्ती (intermediate)", correct: true },
            { text: "दोनों जनकों के लक्षण एक साथ दिखते हैं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> अपूर्ण प्रभाविता में, कोई भी एलील पूरी तरह से प्रभावी नहीं होता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और विषमयुग्मजी जीव का फेनोटाइप दोनों समयुग्मजी जनकों के फेनोटाइप का मिश्रण या मध्यवर्ती होता है (जैसे, लाल और सफेद फूलों से गुलाबी फूल)।"
    },
    {
        question: "प्रश्न 16. सह-प्रभाविता (Co-dominance) का एक उदाहरण क्या है?",
        answers: shuffle([
            { text: "मटर के पौधे की लंबाई", correct: false },
            { text: "मानव में ABO रक्त समूह", correct: true },
            { text: "स्नैपड्रैगन में फूल का रंग", correct: false },
            { text: "हीमोफिलिया", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> ABO रक्त समूह प्रणाली में, एलील Iᴬ , Iᴮ दोनों प्रभावी हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और जब एक साथ मौजूद होते हैं (जीनोटाइप Iᴬ Iᴮ, तो दोनों खुद को व्यक्त करते हैं, जिसके परिणामस्वरूप AB रक्त समूह होता है।"
    },
    {
        question: "प्रश्न 17. कौन सा नियम हमेशा लागू नहीं होता है और इसका अपवाद 'जीन सहलग्नता' (Gene Linkage) है?",
        answers: shuffle([
            { text: "प्रभाविता का नियम", correct: false },
            { text: "पृथक्करण का नियम", correct: false },
            { text: "स्वतंत्र अपव्यूहन का नियम", correct: true },
            { text: "इनमें से कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> स्वतंत्र अपव्यूहन का नियम तभी लागू होता है जब जीन अलग-अलग गुणसूत्रों पर स्थित होते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  एक ही गुणसूत्र पर स्थित जीन एक साथ अगली पीढ़ी में जाते हैं, जिसे सहलग्नता कहते हैं।"
    },
    {
        question: "प्रश्न 18. F1 पीढ़ी को क्या कहा जाता है?",
        answers: shuffle([
            { text: "जनक पीढ़ी (Parental generation)", correct: false },
            { text: "प्रथम संतति पीढ़ी (First Filial generation)", correct: true },
            { text: "द्वितीय संतति पीढ़ी (Second Filial generation)", correct: false },
            { text: "अंतिम पीढ़ी (Final generation)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> F1 पीढ़ी का 'F' लैटिन शब्द 'filius' (पुत्र) से आया है।<br><br><i class='fa-solid fa-angles-right icon'></i>  और यह जनक पीढ़ी के बीच क्रॉस से उत्पन्न पहली पीढ़ी की संतानों को संदर्भित करता है।"
    },
    {
        question: "प्रश्न 19. जब एक विषमयुग्मजी लंबे पौधे (Tt) का स्व-परागण (self-pollination) होता है, तो बौने पौधे उत्पन्न होने की क्या संभावना है?",
        answers: shuffle([
            { text: "75%", correct: false },
            { text: "50%", correct: false },
            { text: "25%", correct: true },
            { text: "100%", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> Tt x Tt क्रॉस में, जीनोटाइप TT, Tt, Tt, और tt के संयोजन 1:2:1 के अनुपात में बनते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  केवल tt जीनोटाइप ही बौना पौधा उत्पन्न करेगा, जिसकी संभावना 4 में से 1, या 25% है।"
    },
    {
        question: "प्रश्न 20. मेंडल के कार्य को उनके जीवनकाल में मान्यता क्यों नहीं मिली?",
        answers: shuffle([
            { text: "उन्होंने अपने काम को प्रकाशित नहीं किया।", correct: false },
            { text: "संचार की कमी और उनके काम का गणितीय आधार समकालीन वैज्ञानिकों की समझ से परे था।", correct: true },
            { text: "उन्होंने गलत पौधे का चयन किया था।", correct: false },
            { text: "उनके निष्कर्ष गलत थे।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> उस समय संचार सुविधाएं सीमित थीं।<br><br><i class='fa-solid fa-angles-right icon'></i>  और जीव विज्ञान में सांख्यिकी और गणितीय तर्क का उपयोग एक नई अवधारणा थी, जिसे अधिकांश जीवविज्ञानी समझ नहीं पाए।"
    },
    {
        question: "प्रश्न 21. 'कारक' (Factors) शब्द, जिसे मेंडल ने उपयोग किया था, को आज हम किस नाम से जानते हैं?",
        answers: shuffle([
            { text: "जीन (Gene)", correct: true },
            { text: "गुणसूत्र (Chromosome)", correct: false },
            { text: "डीएनए (DNA)", correct: false },
            { text: "न्यूक्लियोटाइड (Nucleotide)", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेंडल ने वंशानुगत इकाइयों को 'कारक' कहा था।<br><br><i class='fa-solid fa-angles-right icon'></i>  बाद में, 'जीन' शब्द को इन इकाइयों का वर्णन करने के लिए गढ़ा गया।"
    },
    {
        question: "प्रश्न 22. एक पनेट स्क्वायर (Punnett Square) का उपयोग क्या भविष्यवाणी करने के लिए किया जाता है?",
        answers: shuffle([
            { text: "एक आनुवंशिक क्रॉस के संभावित परिणाम", correct: true },
            { text: "उत्परिवर्तन की दर", correct: false },
            { text: "गुणसूत्रों की संख्या", correct: false },
            { text: "प्रोटीन की संरचना", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> पनेट स्क्वायर एक आरेख है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका उपयोग किसी विशेष क्रॉस या प्रजनन प्रयोग से संतानों के जीनोटाइप की संभावना की भविष्यवाणी करने के लिए किया जाता है।"
    },
    {
        question: "प्रश्न 23. बहुविकल्पी एलील (Multiple Alleles) का क्या अर्थ है?",
        answers: shuffle([
            { text: "एक जीन के केवल दो एलील होते हैं।", correct: false },
            { text: "एक जीन के दो से अधिक एलील एक जनसंख्या में मौजूद होते हैं।", correct: true },
            { text: "एक जीन कई लक्षणों को प्रभावित करता है।", correct: false },
            { text: "कई जीन एक लक्षण को प्रभावित करते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हालांकि एक द्विगुणित व्यक्ति में किसी जीन के लिए केवल दो एलील हो सकते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  लेकिन जनसंख्या में उस जीन के लिए दो से अधिक एलील मौजूद हो सकते हैं। इसका उत्कृष्ट उदाहरण मानव ABO रक्त समूह है।"
    },
    {
        question: "प्रश्न 24. प्लियोट्रॉपी (Pleiotropy) क्या है?",
        answers: shuffle([
            { text: "जब एक जीन कई फेनोटाइपिक लक्षणों को प्रभावित करता है।", correct: true },
            { text: "जब कई जीन एक लक्षण को नियंत्रित करते हैं।", correct: false },
            { text: "जब एक जीन दूसरे जीन को छिपा देता है।", correct: false },
            { text: "जब एलील स्वतंत्र रूप से अलग नहीं होते हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्लियोट्रॉपी तब होती है जब एक एकल जीन एक से अधिक असंबद्ध प्रतीत होने वाले लक्षणों को प्रभावित करता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  उदाहरण के लिए, फेनिलकीटोन्यूरिया (PKU) नामक बीमारी।"
    },
    {
        question: "प्रश्न 25. बैक क्रॉस (Back Cross) क्या है?",
        answers: shuffle([
            { text: "F1 पीढ़ी का किसी भी जनक के साथ संकरण।", correct: true },
            { text: "दो F1 पीढ़ियों का संकरण।", correct: false },
            { text: "F2 पीढ़ी का F1 पीढ़ी के साथ संकरण।", correct: false },
            { text: "दो जनकों का संकरण।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> बैक क्रॉस F1 पीढ़ी के जीव का संकरण उसके किसी एक जनक (P पीढ़ी) के साथ कराने की प्रक्रिया है।<br><br><i class='fa-solid fa-angles-right icon'></i>  टेस्ट क्रॉस एक प्रकार का बैक क्रॉस है।"
    },
    {
        question: "प्रश्न 26. मेंडल द्वारा चुने गए सात लक्षणों में से कौन सा एक लक्षण नहीं था?",
        answers: shuffle([
            { text: "फूल का रंग", correct: false },
            { text: "फली का आकार", correct: false },
            { text: "पत्ती का आकार", correct: true },
            { text: "तने की ऊँचाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> मेंडल ने सात लक्षणों का अध्ययन किया: तने की ऊँचाई, फूल का रंग, फूल की स्थिति, फली का आकार, फली का रंग, बीज का आकार और बीज का रंग।<br><br><i class='fa-solid fa-angles-right icon'></i>  पत्ती का आकार इनमें शामिल नहीं था।"
    },
    {
        question: "प्रश्न 27. यदि गोल बीज (R) झुर्रीदार बीज (r) पर प्रभावी हैं, तो Rr जीनोटाइप का फेनोटाइप क्या होगा?",
        answers: shuffle([
            { text: "झुर्रीदार", correct: false },
            { text: "गोल", correct: true },
            { text: "आंशिक रूप से गोल", correct: false },
            { text: "निर्धारित नहीं किया जा सकता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> प्रभाविता के नियम के अनुसार, विषमयुग्मजी (Rr) स्थिति में, प्रभावी एलील (R) अप्रभावी एलील (r) के प्रभाव को छिपा देता है।<br><br><i class='fa-solid fa-angles-right icon'></i>  इसलिए फेनोटाइप गोल होगा।"
    },
    {
        question: "प्रश्न 28. मानव में लिंग-सहलग्न (sex-linked) अप्रभावी विकार का एक उदाहरण है:",
        answers: shuffle([
            { text: "सिस्टिक फाइब्रोसिस", correct: false },
            { text: "सिकल-सेल एनीमिया", correct: false },
            { text: "हीमोफिलिया", correct: true },
            { text: "डाउन सिंड्रोम", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> हीमोफिलिया एक लिंग-सहलग्न अप्रभावी विकार है।<br><br><i class='fa-solid fa-angles-right icon'></i>  जिसका जीन X गुणसूत्र पर स्थित होता है। यह मेंडेलियन वंशानुक्रम का एक विस्तार है।"
    },
    {
        question: "प्रश्न 29. मेंडल के पृथक्करण के नियम का भौतिक आधार क्या है?",
        answers: shuffle([
            { text: "अर्धसूत्रीविभाजन (Meiosis) के दौरान समजात गुणसूत्रों का पृथक्करण।", correct: true },
            { text: "समसूत्रीविभाजन (Mitosis) के दौरान गुणसूत्रों का पृथक्करण।", correct: false },
            { text: "निषेचन (Fertilization)।", correct: false },
            { text: "जीन विनिमय (Crossing over)।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> युग्मक निर्माण (अर्धसूत्रीविभाजन) के दौरान, समजात गुणसूत्र, जिन पर एलील स्थित होते हैं, अलग-अलग युग्मकों में चले जाते हैं।<br><br><i class='fa-solid fa-angles-right icon'></i>  जो मेंडल के पृथक्करण के नियम का भौतिक आधार है।"
    },
    {
        question: "प्रश्न 30. दो जीनों के बीच पुनर्योजन आवृत्ति (recombination frequency) 50% होने का क्या अर्थ है?",
        answers: shuffle([
            { text: "वे जीन बहुत निकटता से जुड़े हुए हैं।", correct: false },
            { text: "वे जीन अलग-अलग गुणसूत्रों पर हैं या एक ही गुणसूत्र पर बहुत दूर हैं।", correct: true },
            { text: "वे जीन हमेशा एक साथ विरासत में मिलते हैं।", correct: false },
            { text: "वे जीन सह-प्रभावी हैं।", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 50% की पुनर्योजन आवृत्ति अधिकतम है।<br><br><i class='fa-solid fa-angles-right icon'></i>  यह इंगित करती है कि जीन स्वतंत्र रूप से अपव्यूहित हो रहे हैं, जैसा कि मेंडल के स्वतंत्र अपव्यूहन के नियम में वर्णित है। इसका मतलब है कि वे या तो अलग-अलग गुणसूत्रों पर हैं या एक ही गुणसूत्र पर इतनी दूर हैं कि जीन विनिमय लगभग हमेशा उनके बीच होता है।"
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