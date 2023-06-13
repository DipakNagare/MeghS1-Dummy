import { useState } from "react"

const DynamicContextState = () => {

    const defaultDynamicContextState = {
        "eng": {
            "cdac_address": {
              "type": "text",
              "value": "Maharaja Ranjit Singh Punjab Police Academy"
            },
            "have_questions": {
              "type": "text",
              "value": "Have Questions"
            },
            "log_in": {
              "type": "text",
              "value": "Log In"
            },
            "Register": {
              "type": "text",
              "value": "Register"
            },
            "register": {
              "type": "text",
              "value": "Register"
            },
            "megh_Logo": {
              "type": "file",
              "link": "https://www.punjabpoliceacademy.com/sites/default/files/ppa%20logo.png"
            },
            "call_us_now": {
              "type": "text",
              "value": "Call Us Now"
            },
            "call_us_phone": {
              "type": "text",
              "title":"+9101826222061",
              "link": "tel:+9101826222061"
            },
            "enquiry_us": {
              "type": "text",
              "value": "Enquiry Us"
            },
            "enquiry_us_id": {
              "type": "text",
              "title":"itcell.ppa@punjabpolice.gov.in",
              "link":"mailto: itcell.ppa@punjabpolice.gov.in"
            },
            "home": {
              "type": "text",
              "value": "Home"
            },
            "about_us": {
              "type": "text",
              "value": "About us"
            },
            "courses": {
              "type": "text",
              "value": "Courses"
            },
            "all_courses": {
              "type": "text",
              "value": "All Courses"
            },
            "my_courses": {
              "type": "text",
              "value": "My Courses"
            },
            "contact": {
              "type": "text",
              "value": "Contact"
            },
            "library": {
              "type": "text",
              "value": "Library"
            },
          
            "Carousel_img1" :
            {   
              "ID": "1",
              "type": "file",
              "link":"645a0b184408a93e4fc7d722"
            },
            "Carousel_img2" :
            {
              "ID": "2",
              "type": "file",
              "link":"645caf73040ff63d4ce3b196"
            },
            "Carousel_img3" :
            { 
              "ID": "3",
              "type": "file",
              "link":"645caf4b040ff63d4ce3b195"
            },
            "Carousel_img4" :
            { 
              "ID": "4",
              "type": "file",
              "link":"645caf0c040ff63d4ce3b192"
            },
            "Carousel_img5" :
            {
              "ID": "5",
              "type": "file",
              "link":"645cb0cd040ff63d4ce3b197"
            },
           
            "welcome_to_meghSikshak": {
              "type": "text",
              "value": "Maharaja Ranjit Singh Punjab PoliceAcademy"
            },
            "best_courses_in_this_region": {
              "type": "text",
              "value": "Online Courses For Punjab Police"
            },
            "our_courses": {
              "type": "text",
              "value": "Our Courses"
            },
            "contact_us": {
              "type": "text",
              "value": "Contact Us"
            },
            "popular_courses": {
              "type": "text",
              "value": "Top Rated Courses"
            },
            "popular_courses_desc": {
              "type": "text",
              "value": "PPA offers online courses for Policetraining"
            },
            "modern_library": {
              "type": "text",
              "value": "E-Library"
            },
            "modern_library_desc": {
              "type": "text",
              "value": "The E-Library of the World's Best Books"
            },
            "qualified_teacher": {
              "type": "text",
              "value": "Best Training"
            },
            "qualified_teacher_desc": {
              "type": "text",
              "value": "Interactive Training by Experienced Faculty"
            },
            "HOPPA_image":{
              "type": "file",
              // "link": "https://images6.alphacoders.com/727/727657.jpg"
              "link": "645cb0cd040ff63d4ce3b197"
            },
            "title": {
              "type": "text",
              "value": "HISTORY OF PUNJAB POLICE ACADEMY, PHILLAUR"
            },
            "about_desc1": {
              "type": "text",
              "value": "Prior to the enactment of the Police  Act of  1861, the Punjab  Police was known  as  “Military  Police Force”   and  it  consisted   of  8100 men.  Out of these, 5400 were  infantry divided into six Battalions  and the remaining  2,700 were the cavalry. The  Punjab, the sword-arm of India, however, needed a superior force for its internal administration. The Police Act of 1861came into force in Punjab with effect from  the 1st January, 1890."
            },
            "about_desc2": {
              "type": "text",
              "value": "The Police Training School was established in the Phillaur Fort by a Home Department  notification dated  the 9th  September, 1891, with a meagre staff under Mr. J.M. Bishop, I.P., Assistant District  Superintendent of  Police. The School started functioning with effect from the 1st January, 1892. Thus Punjab became  the first state in the country to establish  such a  school.  Most  of the other  training schools  were set up after the report of the Police Commission, appointed in 1902 by Lord Cuzon."
            },
            "happy_students": {
              "type": "text",
              "value": "Happy Students"
            },
            "teachers": {
              "type": "text",
              "value": "Teachers"
            },
            "Courses": {
              "type": "text",
              "value": "Courses"
            },
            "read_more": {
              "type": "text",
              "value": "Read More"
            },
            "info_title": {
              "type": "text",
              "value": "Let us See What Our Trainees Think About Us Their Testimonials."
            },
            "view_all_courses": {
              "type": "text",
              "value": "View All Courses"
            },
            "upcoming": {
              "type": "text",
              "value": "Upcoming"
            },
            "events": {
              "type": "text",
              "value": "Events"
            },
            "frequently_ask": {
              "type": "text",
              "value": "Frequently Ask"
            },
            "Question": {
              "type": "text",
              "value": "Question"
            },
            "faq_titile_1": {
              "type": "text",
              "value": "What is the USP or benefits of enrolling to the courses?"
            },
            "faq_desc_1": {
              "type": "text",
              "value": "C-DAC's industry skilling courses are designed, developed and mentored by R&D experts who have vast experience in implementing real time projects. These courses give an insight into end-to-end project life cycle as per industry standards and processes."
            },
            "faq_titile_2": {
              "type": "text",
              "value": "Who are eligible for enrolling to the courses?"
            },
            "faq_desc_2": {
              "type": "text",
              "value": "Anyone interested can enroll to the courses. Candidates from Electronics, Electrical, Instrumentation, Computer Science, Information Technology or from any equivalent discipline can enroll."
            },
            "faq_titile_3": {
              "type": "text",
              "value": "Who are eligible for enrolling to the courses?"
            },
            "card_title": {
              "type": "text",
              "value": "Dipak Nagare"
            },
            "card_desc": {
              "type": "text",
              "value": "This card create for practice"
            },
            "card_btn": {
              "type": "text",
              "value": "Go somewhere"
            },
            "faq_desc_3": {
              "type": "text",
              "value": "Anyone interested can enroll to the courses. Candidates from Electronics, Electrical, Instrumentation, Computer Science, Information Technology or from any equivalent discipline can enroll."
            },
            "CA": {
              "type": "text",
              "value": "Company Address"
            },
            "cdac_full_address": {
              "type": "text",
              "value": "Maharaja Ranjit Singh Punjab Police Academy, Phillaur Distt - Jalandhar, Punjab, India 144410"
            },
            "meghsikshak": {
              "type": "text",
              "value": "Punjab Police Academy"
            },
            "cdac_official_site": {
              "type": "text",
              "value": "Punjab Police"
            },
            "chariot": {
              "type": "text",
              "value": "Punjab Government"
            },
            "privacy_policy": {
              "type": "text",
              "value": "RTI"
            },
            "copyright": {
              "type": "text",
              "value": "© 2023 Copyright"
            },
            "design_develop": {
              "type": "text",
              "value": "Centre for Development of Advanced Computing C-DAC"
            },
            "usefull_links": "Useful Links",
          
            "footerPoweredBy": {
              "type": "Link",
              "title": "Powered By",
              "link": "https://www.google.com"
            },
            "footerMeghS": {
              "type": "Link",
              "title": "MeghSikshak",
              "link": "https://www.facebook.com/login/"
            },
            "footerHelp": {
              "type": "Link",
              "title": "Help",
              "link": "https://www.cdac.in/index.aspx?ID=HY"
            },
            
            "powerby1": {
              "type": "text",
              "value": "Powered By"
            },
            "megh1": {
              "type": "text",
              "value": "MeghSikshak"
            }
          },

        "hnd": {
    "cdac_address": {
      "type": "text",
      "value": "महाराजा रणजीत सिंह पंजाब पुलिस अकादमी"
    },
    "have_questions": {
      "type": "text",
      "value": "कोई सवाल"
    },
    "log_in": {
      "type": "text",
      "value": "लॉगइन "
    },
    "Register": {
      "type": "text",
      "value": "पंजीकरण करवाना"
    },
    "register": {
      "type": "text",
      "value": "पंजीकरण "
    },
    "megh_Logo": {
      "type": "file",
      "link": "https://www.punjabpoliceacademy.com/sites/default/files/ppa%20logo.png"
    },
    "call_us_now": {
      "type": "text",
      "value": "हमें अभी फ़ोन करें"
    },
    "call_us_phone": {
      "type": "text",
      "title":"+9101826222061",
      "link": "tel:+9101826222061"
    },
    "enquiry_us": {
      "type": "text",
      "value": "हमसे पूछताछ करें"
    },
    "enquiry_us_id": {
      "type": "text",
      "title":"itcell.ppa@punjabpolice.gov.in",
      "link":"mailto: itcell.ppa@punjabpolice.gov.in"
    },
    "home": {
      "type": "text",
      "value": "होम"
    },
    "about_us": {
      "type": "text",
      "value": "अबाउट उस"
    },
    "courses": {
      "type": "text",
      "value": "पाठ्यक्रम"
    },
    "all_courses": {
      "type": "text",
      "value": "सभी पाठ्यक्रम"
    },
    "my_courses": {
      "type": "text",
      "value": "मेरे पाठ्यक्रम"
    },
    "contact": {
      "type": "text",
      "value": "संपर्क"
    },
    "library": {
      "type": "text",
      "value": "इ-पुस्तकालय"
    },
  
    "Carousel_img1" :
    {
      "type": "file",
      "link":"645a0b184408a93e4fc7d722"
    },
    "Carousel_img2" :
    {
      "type": "file",
      "link":"645caf73040ff63d4ce3b196"
    },
    "Carousel_img3" :
    {
      "type": "file",
      "link":"645caf4b040ff63d4ce3b195"
    },
    "Carousel_img4" :
    {
      "type": "file",
      "link":"645caf0c040ff63d4ce3b192"
    },
    "Carousel_img5" :
    {
      "type": "file",
      "link":"645cb0cd040ff63d4ce3b197"
    },
   
    "welcome_to_meghSikshak": {
      "type": "text",
      "value": "महाराजा रणजीत सिंह पंजाब पुलिस अकादमी में आपका स्वागत है"
    },
    "best_courses_in_this_region": {
      "type": "text",
      "value": "पंजाब पुलिस के लिए ऑनलाइन कोर्सेज"
    },
    "our_courses": {
      "type": "text",
      "value": "हमारे कोर्सेज"
    },
    "contact_us": {
      "type": "text",
      "value": "संपर्क करें"
    },
    "popular_courses": {
      "type": "text",
      "value": "टॉप रेटेड कोर्सेज "
    },
    "popular_courses_desc": {
      "type": "text",
      "value": "पीपीए पुलिस प्रशिक्षण के लिए ऑनलाइन कोर्सेज प्रदान करता है"
    },
    "modern_library": {
      "type": "text",
      "value": "इ-पुस्तकालय"
    },
    "modern_library_desc": {
      "type": "text",
      "value": "विश्व की सर्वश्रेष्ठ पुस्तकों की आधुनिक लाइब्रेरी"
    },
    "qualified_teacher": {
      "type": "text",
      "value": "बेस्ट ट्रेनिंग"
    },
    "qualified_teacher_desc": {
      "type": "text",
      "value": "अनुभवी फैकल्टी द्वारा इंटरएक्टिव ट्रेनिंग"
    },
    "HOPPA_image":{
      "type": "file",
      // "link": "https://images6.alphacoders.com/727/727657.jpg"
      "link": "645cb0cd040ff63d4ce3b197"
    },
    "title": {
      "type": "text",
      "value": "पंजाब पुलिस अकादमी, फिल्लौर का इतिहास"
    },
    "about_desc1": {
      "type": "text",
      "value": "1861 के पुलिस अधिनियम के लागू होने से पहले, पंजाब पुलिस को 'सैन्य पुलिस बल' के रूप में जाना जाता था और इसमें 8100 पुरुष शामिल थे। इनमें से 5400 पैदल सेना को छह बटालियनों में विभाजित किया गया था और शेष 2,700 घुड़सवार थे। हालाँकि, भारत की तलवार-भुजा, पंजाब को अपने आंतरिक प्रशासन के लिए एक बेहतर शक्ति की आवश्यकता थी। 1861 का पुलिस अधिनियम 1 जनवरी, 1890 से पंजाब में लागू हुआ।"
    },
    "about_desc2": {
      "type": "text",
      "value": "फिल्लौर किले में पुलिस प्रशिक्षण स्कूल की स्थापना 9 सितंबर, 1891 को गृह विभाग की एक अधिसूचना द्वारा श्री जे.एम. बिशप, आई.पी., सहायक जिला पुलिस अधीक्षक के तहत एक अल्प कर्मचारी के साथ की गई थी। 1 जनवरी, 1892 से स्कूल ने काम करना शुरू कर दिया। इस तरह पंजाब इस तरह का स्कूल स्थापित करने वाला देश का पहला राज्य बन गया। लॉर्ड कुजोन द्वारा 1902 में नियुक्त पुलिस आयोग की रिपोर्ट के बाद अधिकांश अन्य प्रशिक्षण स्कूल स्थापित किए गए थे।"
    },
    "happy_students": {
      "type": "text",
      "value": "खुश छात्र"
    },
    "teachers": {
      "type": "text",
      "value": "अध्यापक"
    },
    "Courses": {
      "type": "text",
      "value": "कोर्सेज"
    },
    "read_more": {
      "type": "text",
      "value": "और पढ़ें"
    },
    "info_title": {
      "type": "text",
      "value": "आइए देखें कि हमारे प्रशिक्षु हमारे बारे में क्या सोचते हैं। उनके टेस्टीमोनिअल्स।"
    },
    "view_all_courses": {
      "type": "text",
      "value": "सभी कोर्सेज देखें"
    },
    "upcoming": {
      "type": "text",
      "value": "अपकमिंग"
    },
    "events": {
      "type": "text",
      "value": "इवेंट्स"
    },
    "frequently_ask": {
      "type": "text",
      "value": "फ्रेक्वेंटली अस्केद"
    },
    "Question": {
      "type": "text",
      "value": "क़ुएस्तिओन्स"
    },
    "faq_titile_1": {
      "type": "text",
      "value": "पाठ्यक्रमों में दाखिला लेने की यूएसपी या लाभ क्या है?"
    },
    "faq_desc_1": {
      "type": "text",
      "value": "सी-डैक के उद्योग कौशल पाठ्यक्रम को अनुसंधान एवं विकास विशेषज्ञों द्वारा डिजाइन, विकसित और सलाह दी जाती है, जिनके पास वास्तविक समय की परियोजनाओं को लागू करने का व्यापक अनुभव है। ये पाठ्यक्रम उद्योग मानकों और प्रक्रियाओं के अनुसार एंड-टू-एंड परियोजना जीवन चक्र में अंतर्दृष्टि प्रदान करते हैं।"
    },
    "faq_titile_2": {
      "type": "text",
      "value": " पाठ्यक्रमों में नामांकन के लिए कौन पात्र हैं??"
    },
    "faq_desc_2": {
      "type": "text",
      "value": "इच्छुक कोई भी कोर्स में दाखिला ले सकता है। इलेक्ट्रॉनिक्स, इलेक्ट्रिकल, इंस्ट्रूमेंटेशन, कंप्यूटर साइंस, सूचना प्रौद्योगिकी या किसी समकक्ष विषय से उम्मीदवार नामांकन कर सकते हैं।"
    },
    "faq_titile_3": {
      "type": "text",
      "value": "पाठ्यक्रमों में नामांकन के लिए कौन पात्र हैं?"
    },
    "faq_desc_3": {
      "type": "text",
      "value": " इच्छुक कोई भी कोर्स में दाखिला ले सकता है। इलेक्ट्रॉनिक्स, इलेक्ट्रिकल, इंस्ट्रूमेंटेशन, कंप्यूटर साइंस, सूचना प्रौद्योगिकी या किसी समकक्ष विषय से उम्मीदवार नामांकन कर सकते हैं।"
    },
    "card_title": {
      "type": "text",
      "value": " दीपक नगरे"
    },
    "card_desc": {
      "type": "text",
      "value": "यह कार्ड अभ्यास के लिए बनाया गया है"
    },
    "card_btn": {
      "type": "text",
      "value": "कहीं जाओ"
    },
    "CA": {
      "type": "text",
      "value": "कम्पनी का पता"
    },
    "cdac_full_address": {
      "type": "text",
      "value": " महाराजा रणजीत सिंह पंजाब पुलिस अकादमी, फिल्लौर जिला - जालंधर, पंजाब, भारत 144410"
    },
    "meghsikshak": {
      "type": "text",
      "value": "पंजाब पुलिस अकादमी"
    },
    "cdac_official_site": {
      "type": "text",
      "value": "पंजाब पुलिस"
    },
    "chariot": {
      "type": "text",
      "value": "पंजाब सरकार"
    },
    "privacy_policy": {
      "type": "text",
      "value": "RTI"
    },
    "copyright": {
      "type": "text",
      "value": "© 2023 कॉपीराइट"
    },
    "design_develop": {
      "type": "text",
      "value": ", प्रगत संगणन विकास केंद्र"
    },

    "usefull_links": "उसेफुल लिंक्स",
  
    "footerPoweredBy": {
      "type": "link",
      "title": " द्वारा संचालित",
      "link": "https://www.google.com"
    },
    "footerMeghS": {
      "type": "link",
      "title": "मेघशिक्षक",
      "link": "https://www.facebook.com/login/"
    },
    "footerHelp": {
      "type": "link",
      "title": "मदद",
      "link": "https://www.cdac.in/index.aspx?id=HY"
    },
    
    "powerby1": {
      "type": "text",
      "value": "| द्वारा संचालित"
    },
    "megh1": {
      "type": "text",
      "value": "मेघशिक्षक"
    }
  },
     "tel":{
            "cdac_address": {
              "type": "text",
              "value": "సీడాక్, ప్లాట్ నం 6 & 7, హార్డ్‌వేర్ పార్క్"
            },
            "have_questions": {
              "type": "text",
              "value": "ఎవైనా సందేహాలు ఉన్నాయా?"
            },
            "log_in": {
              "type": "text",
              "value": "లాగ్ ఇన్"
            },
            "Register": {
              "type": "text",
              "value": "నమోదు చేసుకోండ"
            },
            "register": {
              "type": "text",
              "value": "నమోదు"
            },
            "megh_Logo": {
              "type": "file",
              "link": "https://www.punjabpoliceacademy.com/sites/default/files/ppa%20logo.png"
            },
            "call_us_now": {
              "type": "text",
              "value": "ఇప్పుడే మాకు కాల్ చేయండి"
            },
            "call_us_phone": {
              "type": "text",
              "title":"+9101826222061",
              "link": "tel:+9101826222061"
            },
            "enquiry_us": {
              "type": "text",
              "value": "మమ్మల్ని సంప్రదించండి"
            },
            "enquiry_us_id": {
              "type": "text",
              "title":"itcell.ppa@punjabpolice.gov.in",
              "link":"mailto: itcell.ppa@punjabpolice.gov.in"
            },
            "home": {
              "type": "text",
              "value": "హోమ్"
            },
            "about_us": {
              "type": "text",
              "value": "మా గురించి"
            },
            "courses": {
              "type": "text",
              "value": "కోర్సులు"
            },
            "all_courses": {
              "type": "text",
              "value": "అన్ని కోర్సులు"
            },
            "my_courses": {
              "type": "text",
              "value": "నా కోర్సులు"
            },
            "contact": {
              "type": "text",
              "value": "సంప్రదించండి"
            },
            "library": {
              "type": "text",
              "value": "గ్రంథాలయం"
            },
          
            "Carousel_img1" :
            {
              "type": "file",
              "link":"645a0b184408a93e4fc7d722"
            },
            "Carousel_img2" :
            {
              "type": "file",
              "link":"645caf73040ff63d4ce3b196"
            },
            "Carousel_img3" :
            {
              "type": "file",
              "link":"645caf4b040ff63d4ce3b195"
            },
            "Carousel_img4" :
            {
              "type": "file",
              "link":"645caf0c040ff63d4ce3b192"
            },
            "Carousel_img5" :
            {
              "type": "file",
              "link":"645cb0cd040ff63d4ce3b197"
            },
           
            "welcome_to_meghSikshak": {
              "type": "text",
              "value": "మేఘ్-శిక్షక్ 3.0 కు స్వాగతం"
            },
            "best_courses_in_this_region": {
              "type": "text",
              "value": "ఈ ప్రాంతం లోనే ఉత్తమ కొర్సులు ప్రవేశపెడుతున్నాము. ఈ రొజే మాతో చేరండి"
            },
            "our_courses": {
              "type": "text",
              "value": "మా కోర్సులు"
            },
            "contact_us": {
              "type": "text",
              "value": "మమ్మల్ని సంప్రదించండి"
            },
            "popular_courses": {
              "type": "text",
              "value": "టాప్ రేటింగ్ కోర్సులు"
            },
            "popular_courses_desc": {
              "type": "text",
              "value": "C-DAC అత్యాధునిక టెక్నాలజీలలో ఆన్‌లైన్ కోర్సులను అందిస్తుంది"
            },
            "modern_library": {
              "type": "text",
              "value": "ఆధునిక గ్రంథాలయం"
            },
            "modern_library_desc": {
              "type": "text",
              "value": "ప్రపంచంలోని ఉత్తమ పుస్తకాల ఆధునిక గ్రంథాలయం"
            },
            "qualified_teacher": {
              "type": "text",
              "value": "అర్హత కలిగిన ఉపాధ్యాయులు"
            },
            "qualified_teacher_desc": {
              "type": "text",
              "value": "R&D నిపుణుల ద్వారా ఇంటరాక్టివ్ ఆన్‌లైన్ సెషన్‌లు"
            },
            "HOPPA_image":{
              "type": "file",
              // "link": "https://images6.alphacoders.com/727/727657.jpg"
              "link": "645cb0cd040ff63d4ce3b197"
            },
            "title": {
              "type": "text",
              "value": "పంజాబ్ పోలీస్ అకాడమీ చరిత్ర, ఫిల్లౌర్"
            },
            "about_desc1": {
              "type": "text",
              "value": "1861 పోలీసు చట్టం అమలుకు ముందు, పంజాబ్ పోలీసులను మిలిటరీ పోలీస్ ఫోర్స్ అని పిలిచేవారు మరియు ఇందులో 8100 మంది పురుషులు ఉన్నారు. వీరిలో 5400 మంది పదాతిదళం ఆరు బెటాలియన్‌లుగా విభజించబడింది మరియు మిగిలిన 2,700 మంది ఉన్నారు. అశ్విక దళం, భారతదేశం యొక్క ఖడ్గ-భుజం, అయితే, దాని అంతర్గత పరిపాలన కోసం ఒక ఉన్నతమైన శక్తి అవసరం. 1861 పోలీసు చట్టం పంజాబ్‌లో 1 జనవరి, 1890 నుండి అమలులోకి వచ్చింది."
            },
            "about_desc2": {
              "type": "text",
              "value": "పోలీస్ ట్రైనింగ్ స్కూల్ ఫిల్లౌర్ కోటలో 9 సెప్టెంబర్ 1891 నాటి హోమ్ డిపార్ట్‌మెంట్ నోటిఫికేషన్ ద్వారా స్థాపించబడింది, Mr. J.M. బిషప్, I.P., అసిస్టెంట్ డిస్ట్రిక్ట్ సూపరింటెండెంట్ ఆఫ్ పోలీస్ ఆధ్వర్యంలో కొద్దిపాటి సిబ్బందితో ఈ పాఠశాల పని చేయడం ప్రారంభించింది. జనవరి 1, 1892 నుండి అమలులోకి వచ్చింది. ఆ విధంగా పంజాబ్ అటువంటి పాఠశాలను స్థాపించిన దేశంలో మొదటి రాష్ట్రంగా అవతరించింది. లార్డ్ కుజోన్ 1902లో నియమించిన పోలీస్ కమిషన్ నివేదిక తర్వాత చాలా ఇతర శిక్షణా పాఠశాలలు ఏర్పాటు చేయబడ్డాయి."
            },
            "happy_students": {
              "type": "text",
              "value": "హ్యాపీ స్టూడెంట్స్"
            },
            "teachers": {
              "type": "text",
              "value": "ఉపాధ్యాయులు"
            },
            "Courses": {
              "type": "text",
              "value": "కోర్సులు"
            },
            "read_more": {
              "type": "text",
              "value": "మరింత చదవండి"
            },
            "info_title": {
              "type": "text",
              "value": "మన ట్రైనీలు మన గురించి ఏమనుకుంటున్నారో చూద్దాం. వారి టెస్టిమోనియల్స్."
            },
            "view_all_courses": {
              "type": "text",
              "value": "అన్ని కోర్సులను చూడండి"
            },
            "upcoming": {
              "type": "text",
              "value": "తదుపరి"
            },
            "events": {
              "type": "text",
              "value": "ఈవెంట్స్"
            },
            "frequently_ask": {
              "type": "text",
              "value": "తరచుగా అడిగే ప్రశ్నలు"
            },
            "Question": {
              "type": "text",
              "value": "ప్రశ్నలు"
            },
            "faq_titile_1": {
              "type": "text",
              "value": "Wకోర్సులకు నమోదు చేసుకోవడం వల్ల USP లేదా ప్రయోజనాలు ఏమిటి?"
            },
            "faq_desc_1": {
              "type": "text",
              "value": "C-DAC యొక్క పరిశ్రమ నైపుణ్యం కోర్సులు రియల్ టైమ్ ప్రాజెక్ట్‌లను అమలు చేయడంలో అపారమైన అనుభవం ఉన్న R&D నిపుణులచే రూపొందించబడ్డాయి, అభివృద్ధి చేయబడ్డాయి మరియు మార్గదర్శకత్వం వహిస్తాయి. ఈ కోర్సులు పరిశ్రమ ప్రమాణాలు మరియు ప్రక్రియల ప్రకారం ఎండ్-టు-ఎండ్ ప్రాజెక్ట్ జీవిత చక్రం గురించి అంతర్దృష్టిని అందిస్తాయి."
            },
            "faq_titile_2": {
              "type": "text",
              "value": "కోర్సులకు నమోదు చేసుకోవడానికి ఎవరు అర్హులు?"
            },
            "faq_desc_2": {
              "type": "text",
              "value": "ఆసక్తి ఉన్న ఎవరైనా కోర్సులకు నమోదు చేసుకోవచ్చు. ఎలక్ట్రానిక్స్, ఎలక్ట్రికల్, ఇన్‌స్ట్రుమెంటేషన్, కంప్యూటర్ సైన్స్, ఇన్ఫర్మేషన్ టెక్నాలజీ లేదా ఏదైనా సమానమైన విభాగం నుండి అభ్యర్థులు నమోదు చేసుకోవచ్చు."
            },
            "faq_titile_3": {
              "type": "text",
              "value": "కోర్సుల్లో చేరేందుకు ఎవరు అర్హులు?"
            },
            "faq_desc_3": {
              "type": "text",
              "value": "ఆసక్తి ఉన్న ఎవరైనా కోర్సుల్లో చేరవచ్చు. ఎలక్ట్రానిక్స్, ఎలక్ట్రికల్, ఇన్‌స్ట్రుమెంటేషన్, కంప్యూటర్ సైన్స్, ఇన్ఫర్మేషన్ టెక్నాలజీ లేదా ఏదైనా సమానమైన విభాగంలో అభ్యర్థులు నమోదు చేసుకోవచ్చు."
            },
            "card_title": {
              "type": "text",
              "value": "దీపక్ నగరే"
            },
            "card_desc": {
              "type": "text",
              "value": "ఈ కార్డ్ ప్రాక్టీస్ కోసం రూపొందించబడింది"
            },
            "card_btn": {
              "type": "text",
              "value": "ఎక్కడికన్నా వెళ్ళు"
            },
            "CA": {
              "type": "text",
              "value": "కంపెనీ చిరునామా"
            },
            "cdac_full_address": {
              "type": "text",
              "value": "మహారాజా రంజిత్ సింగ్ పంజాబ్ పోలీస్ అకాడమీ, ఫిల్లౌర్ జిల్లా - జలంధర్, పంజాబ్, భారతదేశం 144410"
            },
            "meghsikshak": {
              "type": "text",
              "value": "పంజాబ్ పోలీస్ అకాడమీ"
            },
            "cdac_official_site": {
              "type": "text",
              "value": " పంజాబ్ పోలీసులు"
            },
            "chariot": {
              "type": "text",
              "value": " పంజాబ్ ప్రభుత్వం"
            },
            "privacy_policy": {
              "type": "text",
              "value": "RTI"
            },
            "copyright": {
              "type": "text",
              "value": "© 2023 కాపీరైట్"
            },
            "design_develop": {
              "type": "text",
              "value": "సెంటర్ ఫర్ డెవలప్‌మెంట్ ఆఫ్ అడ్వాన్స్‌డ్ కంప్యూటింగ్ C-DAC"
            },
            "usefull_links": " ఉపయోగకరమైన లింకులు",
          
            "footerPoweredBy": {
              "type": "link",
              "title": "  ద్వారా ఆధారితం",
              "link": "https://www.google.com"
            },
            "footerMeghS": {
              "type": "link",
              "title": "మేఘశిక్షక్",
              "link": "https://www.facebook.com/login/"
            },
            "footerHelp": {
              "type": "link",
              "title": "సహాయం",
              "link": "https://www.cdac.in/index.aspx?id=HY"
            },
            
            "powerby1": {
              "type": "text",
              "value": "ద్వారా ఆధారితం"
            },
            "megh1": {
              "type": "text",
              "value": "మేఘశిక్షక్"
            }
  }
    }

    const [dynamicContextState, setDynamicContextState] = useState(defaultDynamicContextState)

    return { defaultDynamicContextState, dynamicContextState, setDynamicContextState }

}

export default DynamicContextState