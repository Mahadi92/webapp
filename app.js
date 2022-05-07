const videos = [
    {
        subject: 'Physics',
        chapter: 'ভেক্টর',
        name: 'ভেক্টর ১',
        url: 'https://www.youtube.com/embed/1aBSVYB6-bY'
    },
    {
        subject: 'Physics',
        chapter: 'ভেক্টর',
        name: 'ভেক্টর ২',
        url: 'https://www.youtube.com/embed/Uz2OSrmkh84'
    },
    {
        subject: 'Physics',
        chapter: 'ভেক্টর',
        name: 'ভেক্টর ৩',
        url: 'https://www.youtube.com/embed/H2DGL5V7lto'
    },
    {
        subject: 'Physics',
        chapter: 'নিউটনিয়ান বলবিদ্যা',
        name: 'নিউটনিয়ান বলবিদ্যা ১',
        url: 'https://www.youtube.com/embed/r-NLATfDlEc'
    },
    {
        subject: 'Physics',
        chapter: 'নিউটনিয়ান বলবিদ্যা',
        name: 'নিউটনিয়ান বলবিদ্যা ২',
        url: 'https://www.youtube.com/embed/k6iWs8onjMg'
    },
    {
        subject: 'Physics',
        chapter: 'নিউটনিয়ান বলবিদ্যা ১',
        name: 'নিউটনিয়ান বলবিদ্যা ৩',
        url: 'https://www.youtube.com/embed/q6HpGmypnrA'
    },
    {
        subject: 'Physics',
        chapter: 'নিউটনিয়ান বলবিদ্যা',
        name: 'নিউটনিয়ান বলবিদ্যা (কৌণিক অংশ) ৪',
        url: 'https://www.youtube.com/embed/5HYcnNt7hJw'
    },
    {
        subject: 'Physics',
        chapter: 'নিউটনিয়ান বলবিদ্যা',
        name: 'নিউটনিয়ান বলবিদ্যা (কৌণিক অংশ) ৫',
        url: 'https://www.youtube.com/embed/hwvimdnECAc'
    },
    {
        subject: 'Physics',
        chapter: 'নিউটনিয়ান বলবিদ্যা',
        name: 'নিউটনিয়ান বলবিদ্যা (কৌণিক অংশ) ৬',
        url: 'https://www.youtube.com/embed/6_Bo5ZC3yjI'
    },
    {
        subject: 'Physics',
        chapter: 'কাজ, ক্ষমতা ও শক্তি',
        name: 'কাজ, ক্ষমতা ও শক্তি ১',
        url: 'https://www.youtube.com/embed/MhYW4syVb5A'
    },
    {
        subject: 'Physics',
        chapter: 'কাজ, ক্ষমতা ও শক্তি',
        name: 'কাজ, ক্ষমতা ও শক্তি ২',
        url: 'https://www.youtube.com/embed/L-Ww5H6UOcY'
    },
    {
        subject: 'Physics',
        chapter: 'পর্যায়বৃত্ত গতি',
        name: 'পর্যায়বৃত্ত গতি ১',
        url: 'https://www.youtube.com/embed/ojRBLG-sybY'
    },
    {
        subject: 'Physics',
        chapter: 'পর্যায়বৃত্ত গতি',
        name: 'পর্যায়বৃত্ত গতি ২',
        url: 'https://www.youtube.com/embed/gLWFgQHerEA'
    },
    {
        subject: 'Physics',
        chapter: 'পর্যায়বৃত্ত গতি',
        name: 'পর্যায়বৃত্ত গতি ৩',
        url: 'https://www.youtube.com/embed/ugGJYuezkvs'
    },
    {
        subject: 'Physics',
        chapter: 'পর্যায়বৃত্ত গতি',
        name: 'পর্যায়বৃত্ত গতি ৪',
        url: 'https://www.youtube.com/embed/IXx28VCyEiI'
    },
    {
        subject: 'Physics',
        chapter: 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব',
        name: 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব ১',
        url: 'https://www.youtube.com/embed/-lKXBTzAwm8'
    },
    {
        subject: 'Physics',
        chapter: 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব',
        name: 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব ২',
        url: 'https://www.youtube.com/embed/T2LxVApkIkw'
    },
    {
        subject: 'Physics',
        chapter: 'তাপগতিবিদ্যা',
        name: 'তাপগতিবিদ্যা ১',
        url: 'https://www.youtube.com/embed/jrokAZ_bhYc'
    },
    {
        subject: 'Physics',
        chapter: 'তাপগতিবিদ্যা',
        name: 'তাপগতিবিদ্যা ২',
        url: 'https://www.youtube.com/embed/QMdIBBXjpgI'
    },
    {
        subject: 'Physics',
        chapter: 'তাপগতিবিদ্যা',
        name: 'তাপগতিবিদ্যা ৩',
        url: 'https://www.youtube.com/embed/byQ6aRru9Uk'
    },
    {
        subject: 'Physics',
        chapter: 'তাপগতিবিদ্যা',
        name: 'তাপগতিবিদ্যা ৪',
        url: 'https://www.youtube.com/embed/WbrIo5saTto'
    },
    {
        subject: 'Physics',
        chapter: 'তাপগতিবিদ্যা',
        name: 'তাপগতিবিদ্যা ৫ and QnA',
        url: 'https://www.youtube.com/embed/IkDh4TfOjJc'
    },
    {
        subject: 'Physics',
        chapter: 'চল তড়িৎ',
        name: 'চল তড়িৎ ১',
        url: 'https://www.youtube.com/embed/X2loH006HWY'
    },
    {
        subject: 'Physics',
        chapter: 'চল তড়িৎ',
        name: 'চল তড়িৎ ২',
        url: 'https://www.youtube.com/embed/G7XnhxfFhGk'
    },
    {
        subject: 'Physics',
        chapter: 'চল তড়িৎ',
        name: 'চল তড়িৎ ৩',
        url: 'https://www.youtube.com/embed/3rwmDtqNZr8'
    },
    {
        subject: 'Physics',
        chapter: 'চল তড়িৎ',
        name: 'চল তড়িৎ ৪.১',
        url: 'https://www.youtube.com/embed/VJL1KbU7LQQ'
    },
    {
        subject: 'Physics',
        chapter: 'চল তড়িৎ',
        name: 'চল তড়িৎ ৪.২',
        url: 'https://www.youtube.com/embed/MU1BRn2dWfM'
    },
    {
        subject: 'Physics',
        chapter: 'চল তড়িৎ',
        name: 'তড়িচ্চালক বল, ব্যাটারির শ্রেণি ও সমান্তরাল সমন্বয়',
        url: 'https://www.youtube.com/embed/C9aUXt1bwKA'
    },
    {
        subject: 'Physics',
        chapter: 'চল তড়িৎ',
        name: 'কার্শফের সূত্র পর্ব - ১ ',
        url: 'https://www.youtube.com/embed/ydfvA5OWvbg'
    },
    {
        subject: 'Physics',
        chapter: 'চল তড়িৎ',
        name: 'কার্শফের সূত্র পর্ব - ২ ',
        url: 'https://www.youtube.com/embed/inQfpF1RjGA'
    },
    {
        subject: 'Physics',
        chapter: 'ভৌত আলোকবিজ্ঞান',
        name: 'ভৌত আলোকবিজ্ঞান ১',
        url: 'https://www.youtube.com/embed/BKD4VoGmkBg'
    },
    {
        subject: 'Physics',
        chapter: 'আধুনিক পদার্থবিজ্ঞান',
        name: 'আধুনিক পদার্থবিজ্ঞান ১',
        url: 'https://www.youtube.com/embed/1s8tpBOIJ44'
    },
    {
        subject: 'Physics',
        chapter: 'আধুনিক পদার্থবিজ্ঞান',
        name: 'আধুনিক পদার্থবিজ্ঞান ২',
        url: 'https://www.youtube.com/embed/4yQ25w5z3hw'
    },
    {
        subject: 'Chemistry',
        chapter: 'গুনগত রসায়ন',
        name: 'গুনগত রসায়ন ১',
        url: 'https://www.youtube.com/embed/TVdaHay7JG0'
    },
    {
        subject: 'Chemistry',
        chapter: 'গুনগত রসায়ন',
        name: 'গুনগত রসায়ন ২.১',
        url: 'https://www.youtube.com/embed/yS_FDwzrj_A'
    },
    {
        subject: 'Chemistry',
        chapter: 'গুনগত রসায়ন',
        name: 'গুনগত রসায়ন ২.২',
        url: 'https://www.youtube.com/embed/DJx8TxAW95M'
    },
    {
        subject: 'Chemistry',
        chapter: 'গুনগত রসায়ন',
        name: 'গুনগত রসায়ন ৩.১',
        url: 'https://www.youtube.com/embed/KGffzCkTQyU'
    },
    {
        subject: 'Chemistry',
        chapter: 'গুনগত রসায়ন',
        name: 'গুনগত রসায়ন ৩.২',
        url: 'https://www.youtube.com/embed/Db0NuISDQso'
    },
    {
        subject: 'Chemistry',
        chapter: 'গুনগত রসায়ন',
        name: 'গুনগত রসায়ন ৪',
        url: 'https://www.youtube.com/embed/U7qpEAomBvo'
    },
    {
        subject: 'Chemistry',
        chapter: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন',
        name: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন ১',
        url: 'https://www.youtube.com/embed/5rtxDV776cU'
    },
    {
        subject: 'Chemistry',
        chapter: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন',
        name: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন ২',
        url: 'https://www.youtube.com/embed/QQ6ZMDotSQo'
    },
    {
        subject: 'Chemistry',
        chapter: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন',
        name: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন ৩',
        url: 'https://www.youtube.com/embed/-7pCsUbIr2A'
    },
    {
        subject: 'Chemistry',
        chapter: 'রাসায়নিক পরিবর্তন',
        name: 'রাসায়নিক পরিবর্তন ১',
        url: 'https://www.youtube.com/embed/J2z9APSA2bw'
    },
    {
        subject: 'Chemistry',
        chapter: 'রাসায়নিক পরিবর্তন',
        name: 'রাসায়নিক পরিবর্তন ২',
        url: 'https://www.youtube.com/embed/qERMu7kiatE'
    },
    {
        subject: 'Chemistry',
        chapter: 'রাসায়নিক পরিবর্তন',
        name: 'রাসায়নিক পরিবর্তন ৩',
        url: 'https://www.youtube.com/embed/kmUS0ub7hjw'
    },
    {
        subject: 'Chemistry',
        chapter: 'রাসায়নিক পরিবর্তন',
        name: 'রাসায়নিক পরিবর্তন ৪',
        url: 'https://www.youtube.com/embed/FOCm-I3vQvg'
    },
    {
        subject: 'Chemistry',
        chapter: 'পরিবেশ রসায়ন',
        name: 'পরিবেশ রসায়ন ১',
        url: 'https://www.youtube.com/embed/CtBI40vyWro'
    },
    {
        subject: 'Chemistry',
        chapter: 'পরিবেশ রসায়ন',
        name: 'পরিবেশ রসায়ন ২',
        url: 'https://www.youtube.com/embed/Gl9g5FD_H6w'
    },
    {
        subject: 'Chemistry',
        chapter: 'পরিবেশ রসায়ন',
        name: 'পরিবেশ রসায়ন ৩',
        url: 'https://www.youtube.com/embed/u7o5Ikp3IY4'
    },
    {
        subject: 'Chemistry',
        chapter: 'পরিবেশ রসায়ন',
        name: 'পরিবেশ রসায়ন ৪',
        url: 'https://www.youtube.com/embed/3Al5p6d_ZM0'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ১',
        url: 'https://www.youtube.com/embed/PItbd4PfP5g'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ২',
        url: 'https://www.youtube.com/embed/EYcqo6NMj6Q'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ৩',
        url: 'https://www.youtube.com/embed/u2QP6oYggH8'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ৪',
        url: 'https://www.youtube.com/embed/kyJwlxRIaSw'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ৫',
        url: 'https://www.youtube.com/embed/ss45i4tQAnQ'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ৬',
        url: 'https://www.youtube.com/embed/9Fo02I2anM0'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ৭',
        url: 'https://www.youtube.com/embed/zwAmwXgGJZ0'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ৮',
        url: 'https://www.youtube.com/embed/Cdvi7O32rW0'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ৯',
        url: 'https://www.youtube.com/embed/wcR3beEvF4c'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ১০',
        url: 'https://www.youtube.com/embed/5zdfZRPWXgc'
    },
    {
        subject: 'Chemistry',
        chapter: 'জৈব রসায়ন',
        name: 'জৈব রসায়ন ১১',
        url: 'https://www.youtube.com/embed/Orzjrthf0_c'
    },
    {
        subject: 'Chemistry',
        chapter: 'পরিমানগত রসায়ন',
        name: 'পরিমানগত রসায়ন ১',
        url: 'https://www.youtube.com/embed/pertbKOf0mk'
    },
    {
        subject: 'Chemistry',
        chapter: 'পরিমানগত রসায়ন',
        name: 'পরিমানগত রসায়ন ২',
        url: 'https://www.youtube.com/embed/PtY-PkQk6LE'
    },
    {
        subject: 'Chemistry',
        chapter: 'পরিমানগত রসায়ন',
        name: 'পরিমানগত রসায়ন ৩',
        url: 'https://www.youtube.com/embed/OwY5SA-sVRU'
    },
    {
        subject: 'Chemistry',
        chapter: 'পরিমানগত রসায়ন',
        name: 'পরিমানগত রসায়ন ৪ - Ques Bank Solve',
        url: 'https://www.youtube.com/embed/aCdSXmRiG1Q'
    },
    {
        subject: 'Chemistry',
        chapter: 'পরিমানগত রসায়ন',
        name: 'পরিমানগত রসায়ন ৫ - Ques Bank Solve',
        url: 'https://www.youtube.com/embed/MXLCPzLj3CI'
    },
    {
        subject: 'Chemistry',
        chapter: 'পরিমানগত রসায়ন',
        name: 'পরিমানগত রসায়ন ৬ - Ques Bank Solve',
        url: 'https://www.youtube.com/embed/mIcQrfLqg9o'
    },
    {
        subject: 'Chemistry',
        chapter: 'তড়িৎ রসায়ন',
        name: 'তড়িৎ রসায়ন ১',
        url: 'https://www.youtube.com/embed/M9t2t1i6_10'
    },
    {
        subject: 'Chemistry',
        chapter: 'তড়িৎ রসায়ন',
        name: 'তড়িৎ রসায়ন ২',
        url: 'https://www.youtube.com/embed/kY4i-L6DRvM'
    },
    {
        subject: 'Chemistry',
        chapter: 'তড়িৎ রসায়ন',
        name: 'তড়িৎ রসায়ন ৩',
        url: 'https://www.youtube.com/embed/PQMq5sLjyU'
    },
    {
        subject: 'Math',
        chapter: 'ম্যাট্রিক্স',
        name: 'ম্যাট্রিক্স ১',
        url: 'https://www.youtube.com/embed/rUovSxU-cPo'
    },
    {
        subject: 'Math',
        chapter: 'ম্যাট্রিক্স',
        name: 'ম্যাট্রিক্স ২',
        url: 'https://www.youtube.com/embed/TPkfN8dxVtg'
    },
    {
        subject: 'Math',
        chapter: 'সরলরেখা',
        name: 'সরলরেখা ১',
        url: 'https://www.youtube.com/embed/AjNqVqe3Vz4'
    },
    {
        subject: 'Math',
        chapter: 'সরলরেখা',
        name: 'সরলরেখা ২',
        url: 'https://www.youtube.com/embed/AjNqVqe3Vz4'
    },
    {
        subject: 'Math',
        chapter: 'সরলরেখা',
        name: 'সরলরেখা ৩',
        url: 'https://www.youtube.com/embed/t2gs6mSC9Ns'
    },
    {
        subject: 'Math',
        chapter: 'সরলরেখা',
        name: 'সরলরেখা ৪',
        url: 'https://www.youtube.com/embed/Wsbe2QNgVek'
    },
    {
        subject: 'Math',
        chapter: 'অন্তরীকরণ',
        name: 'অন্তরীকরণ ১',
        url: 'https://www.youtube.com/embed/8RV6ERYoDoQ'
    },
    {
        subject: 'Math',
        chapter: 'অন্তরীকরণ',
        name: 'অন্তরীকরণ ২',
        url: 'https://www.youtube.com/embed/6ieFHOtmclY'
    },
    {
        subject: 'Math',
        chapter: 'অন্তরীকরণ',
        name: 'অন্তরীকরণ ৩',
        url: 'https://www.youtube.com/embed/sUmsX9N3SzI'
    },
    {
        subject: 'Math',
        chapter: 'অন্তরীকরণ',
        name: 'অন্তরীকরণ ৪',
        url: 'https://www.youtube.com/embed/zNmSHe9JGFI'
    },
    {
        subject: 'Math',
        chapter: 'অন্তরীকরণ',
        name: 'অন্তরীকরণ ৫',
        url: 'https://www.youtube.com/embed/LwP0OABU7K0'
    },
    {
        subject: 'Math',
        chapter: 'অন্তরীকরণ',
        name: 'অন্তরীকরণ ৬',
        url: 'https://www.youtube.com/embed/Lon4llJybhQ'
    },
    {
        subject: 'Math',
        chapter: 'অন্তরীকরণ',
        name: 'অন্তরীকরণ ৭',
        url: 'https://www.youtube.com/embed/Ceg21-OXsPs'
    },
    {
        subject: 'Math',
        chapter: 'বহুপদী',
        name: 'বহুপদী ১',
        url: 'https://www.youtube.com/embed/VhFoqYlXHNk'
    },
    {
        subject: 'Math',
        chapter: 'বহুপদী',
        name: 'বহুপদী ২',
        url: 'https://www.youtube.com/embed/yji9CQexRmg'
    },
    {
        subject: 'Math',
        chapter: 'বহুপদী',
        name: 'বহুপদী ৩',
        url: 'https://www.youtube.com/embed/hM1SOSnFYuI'
    },
    {
        subject: 'Math',
        chapter: 'কনিক ও বহুপদী',
        name: 'কনিক ও বহুপদী ১',
        url: 'https://www.youtube.com/embed/hM1SOSnFYuI'
    },
    {
        subject: 'Math',
        chapter: 'কনিক',
        name: 'কনিক ২',
        url: 'https://www.youtube.com/embed/PCdZ5Nq-IeI'
    },
    {
        subject: 'Math',
        chapter: 'কনিক',
        name: 'কনিক ৩',
        url: 'https://www.youtube.com/embed/WGWjuwsdHIM'
    },
    {
        subject: 'Math',
        chapter: 'কনিক',
        name: 'কনিক ৪',
        url: 'https://www.youtube.com/embed/D_0E1y1kRng'
    },
    {
        subject: 'Math',
        chapter: 'কনিক',
        name: 'কনিক ৫',
        url: 'https://www.youtube.com/embed/ZJ0HP25zQDM'
    },
    {
        subject: 'Math',
        chapter: 'বিপরীত ত্রিকোনমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ',
        name: 'বিপরীত ত্রিকোনমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ ১',
        url: 'https://www.youtube.com/embed/8lxKSpaTGl4'
    },
    {
        subject: 'Math',
        chapter: 'বিপরীত ত্রিকোনমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ',
        name: 'বিপরীত ত্রিকোনমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ ২',
        url: 'https://www.youtube.com/embed/KGn2KLpwrGI'
    },
    {
        subject: 'Math',
        chapter: 'বিপরীত ত্রিকোনমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ',
        name: 'বিপরীত ত্রিকোনমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ ৩',
        url: 'https://www.youtube.com/embed/n0iXSLaj0jg'
    },
    {
        subject: 'Math',
        chapter: 'বিপরীত ত্রিকোনমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ',
        name: 'বিপরীত ত্রিকোনমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ ৪',
        url: 'https://www.youtube.com/embed/4CqFlYelfGI'
    },
    {
        subject: 'Math',
        chapter: 'স্থিতিবিদ্যা',
        name: 'স্থিতিবিদ্যা ১',
        url: 'https://www.youtube.com/embed/KagvURfuQug'
    },
    {
        subject: 'Math',
        chapter: 'স্থিতিবিদ্যা',
        name: 'স্থিতিবিদ্যা ২',
        url: 'https://www.youtube.com/embed/cwqZAxJdL2I'
    },
    {
        subject: 'Math',
        chapter: 'স্থিতিবিদ্যা',
        name: 'স্থিতিবিদ্যা ৩',
        url: 'https://www.youtube.com/embed/FAyVflMAzgw'
    },
    {
        subject: 'Math',
        chapter: 'স্থিতিবিদ্যা',
        name: 'স্থিতিবিদ্যা ৪',
        url: 'https://www.youtube.com/embed/ZJnyg9JMSBk'
    },
]