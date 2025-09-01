const questions = [
    {
        topHeading: "कृत् प्रत्यय पर आधारित 49 बहुविकल्पीय प्रश्न (quiz_no.24)"
    },
    {
        question: "'पठितव्य' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "तव्य", correct: true },
            { text: "व्य", correct: false },
            { text: "इतव्य", correct: false },
            { text: "तव्यम्", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पठितव्य' शब्द 'पठ्' धातु में 'तव्य' कृत् प्रत्यय जोड़ने से बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'चाहिए' या 'योग्य' का अर्थ देता है, जैसे - 'पठितव्यं' (पढ़ना चाहिए)।"
    },
    {
        question: "'गायक' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "अक", correct: true },
            { text: "यक", correct: false },
            { text: "आयक", correct: false },
            { text: "क", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गायक' शब्द 'गै' धातु में 'अक' कृत् प्रत्यय लगने से बना है।<br><br><i class='fa-solid fa-angles-right icon'></i> 'गै' का 'आय' हो जाता है और 'अक' जुड़कर 'गायक' बनता है।"
    },
    {
        question: "'लिखाई' में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: false },
            { text: "आई", correct: true },
            { text: "खाई", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखाई' शब्द 'लिख' धातु में 'आई' कृत् प्रत्यय जोड़ने से बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्रिया के भाववाचक रूप को दर्शाता है।"
    },
    {
        question: "'चालक' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "अक", correct: true },
            { text: "क", correct: false },
            { text: "लक", correct: false },
            { text: "चालक", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चालक' शब्द 'चल्' धातु में 'अक' कृत् प्रत्यय लगने से बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'करने वाला' का अर्थ देता है।"
    },
    {
        question: "'चलना' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ना", correct: true },
            { text: "लना", correct: false },
            { text: "अना", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चलना' शब्द 'चल' धातु में 'ना' प्रत्यय जोड़ने से बनता है।"
    },
    {
        question: "'पठनीय' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "नीय", correct: true },
            { text: "य", correct: false },
            { text: "अनी", correct: false },
            { text: "ईय", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पठनीय' शब्द 'पठ्' धातु में 'अनीय' प्रत्यय जोड़ने से बनता है, जिसमें 'अ' का लोप हो जाता है और 'नीय' जुड़ता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह 'योग्य' का अर्थ देता है।"
    },
    {
        question: "'चलना' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ना", correct: true },
            { text: "लना", correct: false },
            { text: "अना", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चलना' शब्द 'चल' धातु में 'ना' प्रत्यय जोड़ने से बनता है।"
    },
    {
        question: "'दिखाई' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आई", correct: true },
            { text: "ई", correct: false },
            { text: "खाई", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिखाई' शब्द 'दिख' धातु में 'आई' कृत् प्रत्यय लगाने से बना है।"
    },
    {
        question: "'दौड़ता' में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ता", correct: true },
            { text: "अता", correct: false },
            { text: "ता", correct: false },
            { text: "ता", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दौड़ता' शब्द 'दौड़ना' क्रिया में 'ता' कृत् प्रत्यय लगाने से बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह वर्तमानकालिक कृदंत है।"
    },
    {
        question: "'लुटेरा' में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "एरा", correct: true },
            { text: "रा", correct: false },
            { text: "टेरा", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लुटेरा' शब्द 'लूट' क्रिया में 'एरा' कृत् प्रत्यय लगाने से बना है।"
    },
    {
        question: "'लिखावट' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आवट", correct: true },
            { text: "वट", correct: false },
            { text: "ट", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखावट' शब्द 'लिख' धातु में 'आवट' प्रत्यय जोड़ने से बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्रिया के भाववाचक रूप को दर्शाता है।"
    },
    {
        question: "'पियक्कड़' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "अक्कड़", correct: true },
            { text: "कड़", correct: false },
            { text: "ड़", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पियक्कड़' शब्द 'पीना' क्रिया में 'अक्कड़' प्रत्यय लगने से बनता है।"
    },
    {
        question: "'लड़ाई' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आई", correct: true },
            { text: "ई", correct: false },
            { text: "लड़", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लड़ाई' शब्द 'लड़' धातु में 'आई' कृत् प्रत्यय जोड़ने से बना है।"
    },
    {
        question: "'सफाई' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: false },
            { text: "आई", correct: true },
            { text: "फाई", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सफाई' शब्द 'साफ' धातु में 'आई' कृत् प्रत्यय लगने से बना है।"
    },
    {
        question: "'तैरना' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ना", correct: true },
            { text: "रना", correct: false },
            { text: "अना", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'तैरना' शब्द 'तैर' धातु में 'ना' प्रत्यय जोड़ने से बनता है।"
    },
    {
        question: "'बिकाऊ' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आऊ", correct: true },
            { text: "काऊ", correct: false },
            { text: "ऊ", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिकाऊ' शब्द 'बिक' धातु में 'आऊ' कृत् प्रत्यय जोड़ने से बनता है।"
    },
    {
        question: "'पढ़ाई' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: false },
            { text: "आई", correct: true },
            { text: "खाई", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पढ़ाई' शब्द 'पढ़' धातु में 'आई' कृत् प्रत्यय जोड़ने से बनता है।"
    },
    {
        question: "'चालू' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "लू", correct: false },
            { text: "ऊ", correct: true },
            { text: "अलू", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चालू' शब्द 'चल' धातु में 'ऊ' कृत् प्रत्यय जोड़ने से बनता है।"
    },
    {
        question: "'लुभावनी' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "नी", correct: false },
            { text: "आवनी", correct: true },
            { text: "वनी", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लुभावनी' शब्द 'लुभा' धातु में 'आवनी' प्रत्यय लगाने से बनता है।"
    },
    {
        question: "'कमाई' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आई", correct: true },
            { text: "ई", correct: false },
            { text: "माई", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कमाई' शब्द 'कम' धातु में 'आई' कृत् प्रत्यय जोड़ने से बना है।"
    },
    {
        question: "'सजावट' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आवट", correct: true },
            { text: "वट", correct: false },
            { text: "ट", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सजावट' शब्द 'सजाना' क्रिया में 'आवट' प्रत्यय जोड़ने से बना है।"
    },
    {
        question: "'खेवनहार' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "हार", correct: true },
            { text: "अनहार", correct: false },
            { text: "व हार", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खेवनहार' शब्द 'खेवना' क्रिया में 'हार' प्रत्यय जोड़ने से बनता है।"
    },
    {
        question: "'घुमक्कड़' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "अक्कड़", correct: true },
            { text: "कड़", correct: false },
            { text: "ड़", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घुमक्कड़' शब्द 'घूमना' क्रिया में 'अक्कड़' प्रत्यय लगाने से बनता है।"
    },
    {
        question: "'पढ़ाकू' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आकू", correct: true },
            { text: "कू", correct: false },
            { text: "ड़ाकू", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पढ़ाकू' शब्द 'पढ़ना' क्रिया में 'आकू' प्रत्यय लगने से बना है।"
    },
    {
        question: "'चलन' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "अन", correct: true },
            { text: "न", correct: false },
            { text: "लन", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चलन' शब्द 'चल' धातु में 'अन' प्रत्यय जोड़ने से बनता है।"
    },
    {
        question: "'सुहावना' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आवना", correct: true },
            { text: "वना", correct: false },
            { text: "ना", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'सुहावना' शब्द 'सुहाना' क्रिया में 'आवना' प्रत्यय जोड़ने से बना है।"
    },
    {
        question: "'लिखाई' में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "आई", correct: true },
            { text: "ई", correct: false },
            { text: "खाइ", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखाई' शब्द 'लिख' धातु में 'आई' कृत् प्रत्यय लगाने से बना है।"
    },
    {
        question: "'छुटकारा' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आरा", correct: true },
            { text: "कारा", correct: false },
            { text: "रा", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'छुटकारा' शब्द 'छुट' धातु में 'आरा' प्रत्यय लगाने से बना है।"
    },
    {
        question: "'दौड़' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "अ", correct: false },
            { text: "ड़", correct: false },
            { text: "कोई नहीं", correct: true },
            { text: "दौड़", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दौड़' शब्द एक मूल धातु है और इसमें कोई प्रत्यय नहीं लगा है।"
    },
    {
        question: "'पालक' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "अक", correct: true },
            { text: "क", correct: false },
            { text: "लक", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पालक' शब्द 'पाल' धातु में 'अक' प्रत्यय लगने से बना है।"
    },
    {
        question: "'भूलक्कड़' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "अक्कड़", correct: true },
            { text: "कड़", correct: false },
            { text: "ड़", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'भूलक्कड़' शब्द 'भूलना' क्रिया में 'अक्कड़' प्रत्यय लगने से बनता है।"
    },
    {
        question: "'खिलाड़ी' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आड़ी", correct: true },
            { text: "ड़ी", correct: false },
            { text: "डी", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'खिलाड़ी' शब्द 'खेलना' क्रिया में 'आड़ी' प्रत्यय लगाने से बनता है।"
    },
    {
        question: "'गाड़ी' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: true },
            { text: "ड़ी", correct: false },
            { text: "आड़ी", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'गाड़ी' शब्द 'गाड़' धातु में 'ई' प्रत्यय जोड़ने से बना है।"
    },
    {
        question: "'उड़ान' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आन", correct: true },
            { text: "न", correct: false },
            { text: "ड़ान", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उड़ान' शब्द 'उड़' धातु में 'आन' प्रत्यय लगने से बना है।"
    },
    {
        question: "'बहता' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ता", correct: true },
            { text: "अता", correct: false },
            { text: "बह", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बहता' शब्द 'बह' धातु में 'ता' कृत् प्रत्यय लगने से बना है।"
    },
    {
        question: "'कठिन' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "इन", correct: false },
            { text: "न", correct: false },
            { text: "इन", correct: false },
            { text: "कोई नहीं", correct: true }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'कठिन' एक विशेषण शब्द है और इसमें कोई कृत् प्रत्यय नहीं है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह मूल शब्द है।"
    },
    {
        question: "'लिखाई' में कौन-सा प्रत्यय है?",
        answers: shuffle([
            { text: "आई", correct: true },
            { text: "ई", correct: false },
            { text: "कोई नहीं", correct: false },
            { text: "खाई", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लिखाई' शब्द 'लिख' धातु में 'आई' कृत् प्रत्यय लगाने से बना है।"
    },
    {
        question: "'समझौता' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "औता", correct: true },
            { text: "ता", correct: false },
            { text: "ओता", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समझौता' शब्द 'समझ' धातु में 'औता' प्रत्यय लगने से बना है।"
    },
    {
        question: "'दिखावा' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आवा", correct: true },
            { text: "वा", correct: false },
            { text: "खावा", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिखावा' शब्द 'दिख' धातु में 'आवा' प्रत्यय जोड़ने से बना है।"
    },
    {
        question: "'मिलान' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आन", correct: true },
            { text: "न", correct: false },
            { text: "लान", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'मिलान' शब्द 'मिल' धातु में 'आन' प्रत्यय लगने से बना है。"
    },
    {
        question: "'घूमना' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ना", correct: true },
            { text: "मना", correct: false },
            { text: "अना", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'घूमना' शब्द 'घूम' धातु में 'ना' प्रत्यय जोड़ने से बनता है।<br><br><i class='fa-solid fa-angles-right icon'></i> यह क्रिया का सामान्य रूप है।"
    },
    {
        question: "'बिक्री' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "ई", correct: true },
            { text: "री", correct: false },
            { text: "क्री", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'बिक्री' शब्द 'बिक' धातु में 'ई' प्रत्यय लगने से बना है।"
    },
    {
        question: "'पियक्कड़' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "अक्कड़", correct: true },
            { text: "कड़", correct: false },
            { text: "ड़", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पियक्कड़' शब्द 'पीना' क्रिया में 'अक्कड़' प्रत्यय लगाने से बनता है।"
    },
    {
        question: "'चुनौती' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "औती", correct: true },
            { text: "ती", correct: false },
            { text: "ओती", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'चुनौती' शब्द 'चुन' धातु में 'औती' प्रत्यय लगाने से बनता है।"
    },
    {
        question: "'समझौता' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "औता", correct: true },
            { text: "ता", correct: false },
            { text: "ओता", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'समझौता' शब्द 'समझ' धातु में 'औता' प्रत्यय लगने से बना है。"
    },
    {
        question: "'दिखाई' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आई", correct: true },
            { text: "ई", correct: false },
            { text: "खाई", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'दिखाई' शब्द 'दिख' धातु में 'आई' कृत् प्रत्यय लगाने से बना है।"
    },
    {
        question: "'पढ़ाई' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "आई", correct: true },
            { text: "ई", correct: false },
            { text: "खाई", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'पढ़ाई' शब्द 'पढ़' धातु में 'आई' कृत् प्रत्यय लगाने से बना है।"
    },
    {
        question: "'उड़न' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "अन", correct: true },
            { text: "न", correct: false },
            { text: "ड़न", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'उड़न' शब्द 'उड़' धातु में 'अन' प्रत्यय लगने से बनता है।"
    },
    {
        question: "'लुटेरा' शब्द में कौन-सा कृत् प्रत्यय है?",
        answers: shuffle([
            { text: "एरा", correct: true },
            { text: "रा", correct: false },
            { text: "टेरा", correct: false },
            { text: "कोई नहीं", correct: false }
        ]),
        Explanation: "<i class='fa-solid fa-angles-right icon'></i> 'लुटेरा' शब्द 'लूट' क्रिया में 'एरा' प्रत्यय लगाने से बना है।"
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