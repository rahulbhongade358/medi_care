import Antibiotics from './../../assets/Doctors/Antibiotics.jpg'
import Painkiller from './../../assets/Doctors/Painkiller.jpeg'
import Antacids from './../../assets/Doctors/Antacide.jpg'
import Apple from './../../assets/Doctors/Apple.jpg'
import Banana from './../../assets/Doctors/Banana.jpg'
import Oranges from './../../assets/Doctors/Oranges.jpg'
import ColdFlu from './../../assets/Doctors/Cold & Flu.jpg'
import Diabetes from './../../assets/Doctors/Diabetes.jpg'
import BP from './../../assets/Doctors/BP.png'
import PMJAY from './../../assets/Doctors/PMJAY.jpg'
import RBSK from './../../assets/Doctors/RBSK.jpg'
import JanAushadhiYojana from './../../assets/Doctors/JanAushadhiYojana.jpg'
import MissionIndradhanush from './../../assets/Doctors/MissionIndradhanush.jpg'
import Sana from "./../../assets/Doctors/Expertsimg/F1D.png"
import Meera from "./../../assets/Doctors/Expertsimg/F2D.png"
import Anjali from "./../../assets/Doctors/Expertsimg/F3D.jpg"
import Neha from "./../../assets/Doctors/Expertsimg/F4D.jpg"
import Aniket from "./../../assets/Doctors/Expertsimg/M1D.jpeg"
import Rajesh from "./../../assets/Doctors/Expertsimg/M3D.png"
const  MEDICINES=[
    {
        Title:'Antibiotics',
        Description:' Medicines that kill or stop the growth of bacteria.',
        Use: 'Treat infections like throat infections, urinary infections, pneumonia, etc.',
        CommonExamples: 'Amoxicillin, Azithromycin',
        Note: "Always take as prescribed by a doctor. Don’t overuse.",
        Img: Antibiotics
    },
    {
        Title:'Painkillers',
        Description:'Medicines that reduce or block pain',
        Use: 'Headache, body pain, injury pain, fever.',
        CommonExamples: 'Paracetamol, Ibuprofen',
        Note: " Avoid taking too often. It may affect kidneys or liver in excess.",
        Img: Painkiller
    },
    {
        Title:'Antacids',
        Description:'Medicines that neutralize stomach acid.',
        Use: 'Acidity, heartburn, indigestion, gas.',
        CommonExamples: 'Gelusil, Digene, Eno',
        Note: "Use after meals or as per doctor's advice.",
        Img: Antacids
    },
    // {
    //     Title:'Vaccines',
    //     Description:'Injections or oral drops that help prevent diseases.',
    //     Use: 'Build immunity against serious illnesses (like polio, COVID-19, hepatitis).',
    //     CommonExamples: ' Covishield, MMR, BCG',
    //     Note: "Usually given during childhood or as advised by doctors."
    // },
    // {
    //     Title:'Cough Syrups',
    //     Description:'Liquid medicines that relieve coughing.',
    //     Use: 'Dry cough, wet cough, throat irritation.',
    //     CommonExamples: ' Benadryl, Ascoril, Corex',
    //     Note: "Some syrups cause sleepiness. Avoid before driving."
    // },
    // {
    //     Title:' Fever Reducers (Antipyretics)',
    //     Description:'Medicines that treat allergies.',
    //     Use: 'Fever from cold, flu, infections.',
    //     CommonExamples: 'Paracetamol, Crocin',
    //     Note: "Drink water, rest, and monitor temperature regularly."
    // },
    
]
const FRUITS =[
    {
        Title:"Apple",
        Description:"Apples are crunchy, sweet fruits packed with fiber, vitamins, and antioxidants. A classic symbol of health.",
        HealthBenefits:{
            B1:"Supports heart health and lowers cholesterol.",
            B2:"Helps regulate blood sugar levels.",
            B3:"Boosts immunity and fights inflammation."
        },
        UsageIdeas:" Eat raw with skin, slice into salads, bake as apple pie, or blend into smoothies.",
        Img:Apple
    },
    {
        Title:"Banana",
        Description:"Bananas are soft, sweet, and energy-rich fruits that are easy to digest and perfect for all ages.",
        HealthBenefits:{
            B1:"Rich in potassium, supports healthy blood pressure.",
            B2:"Helps digestion and prevents constipation.",
            B3:"Boosts energy before workouts."
        },
        UsageIdeas:"Eat as is, add to cereal or oats, make banana shakes or muffins.",
        Img:Banana
    },
    {
        Title:"Orange",
        Description:" Oranges are juicy citrus fruits loaded with Vitamin C and antioxidants, ideal for skin and immunity.",
        HealthBenefits:{
            B1:"Strengthens immune system.",
            B2:"Reduces skin damage and supports collagen production.",
            B3:"Helps prevent anemia by improving iron absorption."
        },
        UsageIdeas:"Eat raw, make fresh orange juice, or zest the peel in desserts.",
        Img:Oranges
    },
    // {
    //     Title:"Papaya",
    //     Description:"Papayas are tropical fruits with soft orange flesh, known for their strong digestive enzymes.",
    //     HealthBenefits:{
    //         B1:"Improves digestion with papain enzyme.",
    //         B2:"Clears acne and promotes skin glow.",
    //         B3:"Rich in Vitamin A for better eyesight."
    //     },
    //     UsageIdeas:"Eat ripe papaya with lemon, blend into a smoothie, or add to a fruit bowl."
    // },
    // {
    //     Title:"Grapes",
    //     Description:"Grapes are juicy bite-sized fruits available in green, red, or black colors, full of nutrients.",
    //     HealthBenefits:{
    //         B1:"High in antioxidants, supports brain and heart.",
    //         B2:"Anti-inflammatory, may reduce risk of cancer.",
    //         B3:"Promotes hydration and good skin."
    //     },
    //     UsageIdeas:"Eat raw, freeze as healthy snacks, or toss into salads or yogurt."
    // },
    // {
    //     Title:"Watermelon",
    //     Description:"Watermelon is a summer favorite, with 92% water content to keep you cool and refreshed.",
    //     HealthBenefits:{
    //         B1:"Keeps the body hydrated and boosts energy.",
    //         B2:"Supports healthy skin and digestion.",
    //         B3:"Contains lycopene, good for the heart and eyes."
    //     },
    //     UsageIdeas:"Cut into cubes, blend into juice, or enjoy as chilled slices."
    // },
    // {
    //     Title:"Pineapple",
    //     Description:"A tropical fruit with a unique sweet and sour taste, loaded with enzymes and nutrients.",
    //     HealthBenefits:{
    //         B1:"Helps reduce inflammation and joint pain.",
    //         B2:"Boosts digestion and supports immunity.",
    //         B3:"Rich in Vitamin C and manganese."
    //     },
    //     UsageIdeas:"Eat fresh slices, grill for desserts, or blend into smoothies and juices."
    // },
    // {
    //     Title:"Guava",
    //     Description:"Guava is a nutrient-rich fruit with edible seeds and skin, known for its unique flavor and medicinal value.",
    //     HealthBenefits:{
    //         B1:"Excellent for controlling blood sugar (great for diabetics).",
    //         B2:"Boosts digestion and relieves constipation.",
    //         B3:"Improves skin and hair health."
    //     },
    //     UsageIdeas:"Eat raw with salt, make guava juice, or enjoy in fruit chaat."
    // },
    // {
    //     Title:"Mango",
    //     Description:"Mango is the 'king of fruits' — delicious, tropical, and loaded with vitamins.",
    //     HealthBenefits:{
    //         B1:"Enhances immunity and supports vision.",
    //         B2:"Promotes digestive health and prevents acidity.",
    //         B3:"Full of antioxidants and skin-friendly nutrients."
    //     },
    //     UsageIdeas:"Eat as ripe slices, make mango milkshake, chutney, or ice cream."
    // },
]
const SYMPTOMS=[
    {
        Title:"Cold & Flu",
        Description:"Cold and flu are common viral infections that affect your respiratory system. Though usually not serious, they can cause discomfort for a few days.",
        Symptoms:{
            S1:"Sneezing",
            S2:"Sore throat",
            S3:"Fever",
            S4:"Runny or blocked nose"
        },
         TipstoFollow:"Stay warm, drink hot fluids like soup or tea, and get plenty of rest. Steam inhalation and salt water gargles can help relieve symptoms.",
         Img:ColdFlu
    },
    {
        Title:"Diabetes",
        Description:"Diabetes is a long-term condition where the body struggles to manage blood sugar. It needs regular monitoring and lifestyle control.",
        Symptoms:{
            S1:"Frequent urination",
            S2:"Increased thirst",
            S3:"Sudden weight loss",
            S4:"Fatigue"
        },
        TipstoFollow:"Eat a healthy, balanced diet with low sugar and carbs. Exercise regularly and monitor your blood sugar levels daily.",
        Img:Diabetes
    },
    {
        Title:"Hypertension",
        Description:"Hypertension is when your blood pressure stays consistently high, which can lead to serious heart and kidney issues if untreated.",
        Symptoms:{
            S1:"Headaches",
            S2:"Dizziness",
            S3:"Chest pain",
            S4:"Nosebleeds (in severe cases)"
        },
        TipstoFollow:"Reduce salt and oily food. Stay active, avoid stress, and check your BP regularly. Meditation and yoga can help too.",
        Img:BP
    },
    // {
    //     Title:"Migraine",
    //     Description:"A migraine is more than a normal headache. It’s an intense, throbbing pain that can affect daily life and lasts for hours or even days.",
    //     Symptoms:{
    //         S1:"Severe headache (usually one side)",
    //         S2:"Nausea or vomiting",
    //         S3:"Sensitivity to light and sound",
    //         S4:"Blurred vision"
    //     },
    //     HomeRemedy:{
    //         HR1:"Rest in a quiet, dark room.",
    //         HR2:"Apply a cold pack on your forehead.",
    //         HR3:"Drink water and avoid skipping meals."},
    //     TipstoFollow:"Rest in a quiet, dark room. Avoid triggers like loud sounds or strong smells. Drink water and try a cold compress on your forehead."
    // },
    // {
    //     Title:"Acidity (Heartburn)",
    //     Description:"Acidity occurs when excess stomach acid flows into the food pipe, causing a burning sensation in the chest and throat.",
    //     Symptoms:{
    //         S1:"Burning chest pain",
    //         S2:"Bloating",
    //         S3:"Sour burps",
    //         S4:"Nausea"
    //     },
    //     HomeRemedy:{
    //         HR1:"Drink cold milk or buttermilk..",
    //         HR2:"Chew basil (tulsi) leaves or eat a banana.",
    //         HR3:"Avoid spicy, oily foods and eat smaller meals."},
    //     TipstoFollow:"Avoid spicy or oily food. Don’t lie down immediately after eating. Drink cold milk or eat bananas to soothe the stomach."
    // },
    // {
    //     Title:"Asthma",
    //     Description:"Asthma is a chronic disease that narrows airways, making breathing difficult. It’s usually triggered by allergens or pollution.",
    //     Symptoms:{
    //         S1:"Shortness of breath",
    //         S2:"Wheezing",
    //         S3:"Coughing (especially at night)",
    //         S4:"Chest tightness"
    //     },
    //     HomeRemedy:{
    //         HR1:"Inhale steam with mint or eucalyptus oil.",
    //         HR2:"Take honey with warm water or ginger juice.",
    //         HR3:"Avoid dust, pollution, and cold air."},
    //     TipstoFollow:"Use an inhaler as prescribed. Avoid exposure to dust, pets, or smoke. Keep your home clean and allergy-free."
    // },
    // {
    //     Title:"Allergies",
    //     Description:"Allergies happen when your immune system overreacts to substances like pollen, food, or dust. They are common and manageable.",
    //     Symptoms:{
    //         S1:"Sneezing",
    //         S2:"Rashes",
    //         S3:"Red, watery eyes",
    //         S4:"Itchy nose or throat"
    //     },
    //     HomeRemedy:{
    //         HR1:"Inhale steam with eucalyptus oil to clear sinuses..",
    //         HR2:"Drink warm turmeric milk to reduce inflammation.",
    //         HR3:"Use a clean humidifier in your room."
    //      },
    //     TipstoFollow:"Stay away from known triggers. Keep antihistamines handy and wear a mask during pollen seasons or cleaning."
    // },
    // {
    //     Title:"Dehydration",
    //     Description:"Dehydration happens when your body loses more fluids than it takes in, which can cause tiredness and affect normal functions.",
    //     Symptoms:{
    //         S1:"Dry mouth",
    //         S2:"Weakness or dizziness",
    //         S3:"Dark yellow urine",
    //         S4:"Dry skin"
    //     },
    //     HomeRemedy:{
    //         HR1:"Drink water frequently in small sips.",
    //         HR2:"Take coconut water, buttermilk, or ORS solution.",
    //         HR3:"Eat fruits with high water content like watermelon and cucumber."
    //      },
    //     TipstoFollow:"Drink water regularly, especially during hot weather or exercise. Include oral rehydration solution (ORS) if needed."
    // },
    // {
    //     Title:"Anaemia",
    //     Description:"Anaemia occurs when your body lacks enough red blood cells, leading to less oxygen in your organs. It often results from iron deficiency.",
    //     Symptoms:{
    //         S1:"Constant tiredness",
    //         S2:"Pale skin",
    //         S3:"Fast heartbeat",
    //         S4:"Weakness"
    //     },
    //      HomeRemedy:{
    //         HR1:"Eat iron-rich foods like spinach, beetroot, pomegranate, jaggery.",
    //         HR2:"Include Vitamin C (like oranges) to improve iron absorption.",
    //         HR3:"Drink beetroot juice regularly."
    //      },
    //     TipstoFollow:"Eat iron-rich foods like spinach, jaggery, eggs, and dry fruits. Take iron supplements if prescribed by a doctor."
    // },
]
const GovtScheme=[
    {
        Title:"Ayushman Bharat Yojana (PM-JAY)",
        Description:"India’s largest government health scheme offering free medical treatment.",
        Benefits:{
            B1:"₹5 Lakh coverage per family per year",
            B2:"For serious illnesses like cancer, heart surgery",
            B3:"Over 25,000+ hospitals included"
        },
        Tagline: "“Get treated at top hospitals for free”",
        Img:PMJAY
    },
    {
        Title:"Jan Aushadhi Yojana",
        Description:"Government scheme to provide quality medicines at low prices through special stores.",
        Benefits:{
            B1:"50–90% cheaper medicines",
            B2:"Available at Jan Aushadhi Kendras across India",
            B3:"Covers tablets, syrups, and surgical items"
        },
        Tagline: "“Save money, get quality medicines”",
        Img:JanAushadhiYojana
    },
    {
        Title:"Mission Indradhanush",
        Description:"Free vaccination drive for children and pregnant women.",
        Benefits:{
            B1:"Covers 12+ deadly diseases like polio, measles, hepatitis",
            B2:"Free vaccines and follow-up shots",
            B3:"Focus on rural and low-income families"
        },
        Tagline: "“Protecting every child, every mother”",
        Img:MissionIndradhanush
    },
    {
        Title:" Rashtriya Bal Swasthya Karyakram (RBSK)",
        Description:"Health screening and care for children aged 0 to 18 years.",
        Benefits:{
            B1:"Free diagnosis for 30+ common childhood conditions",
            B2:"Includes heart issues, vision, hearing, skin problems",
            B3:"Free treatment and referrals"
        },
        Tagline: "“Healthy childhood, better future”",
        Img:RBSK
    }
]
const WhychooseCard=[
    {
    Title: "✅  Verified & Experienced Doctors",
    Description: `At MediCare+, we ensure that every doctor on our platform has been properly verified through professional documentation and medical certification. We only allow experienced and 
    registered practitioners with a strong background in patient care to diagnose and treat.`,
    Importans: `Patients need to feel confident about who is treating them. When they know that doctors are genuine, qualified, and have years of real-world experience,
     they are more likely to trust the treatment and return to the platform.`,
  },
    {
    Title: "🔒  Secure Role-Based Dashboards",
    Description: `Each user—whether a doctor, nurse, or patient—gets a separate, role-specific dashboard after 
    logging in. Doctors can add or update diagnoses, nurses can view records, 
    and patients can only access their own health data. All data is encrypted and controlled by role access.`,
    Importans: `Medical data is sensitive and private. Giving access only to those who need it (role-based access)
     helps maintain confidentiality, prevents misuse,
     and follows healthcare data safety guidelines. This earns user trust and ensures peace of mind..`,
  },
    {
    Title: "📁  Easy Access to Medical Records",
    Description: `Doctors can add diagnoses, symptoms, and treatment plans directly into the system. Nurses can view these records anytime, and 
    patients can log in to check their own reports, prescriptions, and updates, all from one place—anytime, anywhere.`,
    Importans: `When records are easy to access digitally, it saves time, avoids paperwork, and reduces medical errors. Patients 
    don’t have to carry physical files, and doctors get a quick understanding of patient history for better treatment.`,
  },
    {
    Title: "🤖  AI-Powered Health Assistant (Coming Soon)",
    Description: `We’re working on a smart, AI-based assistant that can help users by suggesting common home remedies, health tips, and giving an
     initial understanding of symptoms before they meet a doctor. It will be like having a virtual medical guide 24/7.`,
    Importans: `Many users are unsure whether their problem is serious or not. An AI health assistant will help users
     make basic health decisions instantly and feel more in control. It will reduce panic and encourage early detection.`,
  },
    {
    Title: "⏩  Simple & Fast Login for All Roles",
    Description: `MediCare+ allows doctors, nurses, and patients to log in quickly through their respective login portals.
     After login, they are redirected to their personalized dashboards without any unnecessary steps or confusion.`,
    Importans: `Healthcare systems should be fast and efficient. A slow or complicated login process can delay important tasks. With our smooth
     login, users can immediately begin diagnosis, view updates, or check reports—especially useful in emergencies.`,
  },
]
const FunFact=[
    {
        Title:"🩺 “Water Boosts Brain Power”",
        Fact:`💧 Drinking enough water each day improves brain function, concentration, and mood.
It helps maintain optimal cognitive performance and prevents mental fatigue.`,
        HealthImpact:`Dehydration, even at low levels, can impair short-term memory and alertness.`
    },
    {
        Title:"😄 “Laughter is Medicine”",
        Fact:`😂  A good laugh stimulates your heart, lungs, and muscles while increasing endorphins.
It improves mood and even helps you bond socially with others.`,
        HealthImpact:`Laughter lowers stress hormones and boosts the immune system naturally.`
    },
    {
        Title:"🛏️ “Sleep Heals Your Body”",
        Fact:`🌙  Deep sleep allows your brain and body to rest, repair, and regenerate.
It boosts learning, memory retention, and emotional stability.`,
        HealthImpact:`Chronic sleep deprivation increases risks of obesity, heart disease, and diabetes.`
    },
    {
        Title:"🥦 “Green Veggies = Healthy Heart”",
        Fact:`🥬 Fact: Green vegetables are packed with fiber, vitamins, and heart-protecting nutrients.
They help lower cholesterol and improve artery flexibility.`,
        HealthImpact:`A diet rich in greens reduces the risk of heart attacks and high blood pressure.`
    },
    {
        Title:"🚶 “Walk Daily, Live Longer”",
        Fact:`🚶‍♂️  A brisk 30-minute walk improves cardiovascular health and controls weight.
It also enhances mood and reduces stress levels.`,
        HealthImpact:`Walking regularly lowers the risk of type 2 diabetes and strengthens bones.`
    },
    {
        Title:"🧂 “Less Salt = Healthy BP”",
        Fact:`⚖️  High salt intake leads to water retention, increasing blood pressure.
Cutting down on salt can significantly lower stroke and heart disease risk.`,
        HealthImpact:`Sodium overload damages arteries and weakens heart function over time.`
    },
    {
        Title:"🍫 “Dark Chocolate is Good”",
        Fact:`🍫  Dark chocolate contains antioxidants that protect your heart and brain.
It helps improve blood flow and reduce inflammation when eaten moderately.`,
        HealthImpact:`It lowers blood pressure and may reduce the risk of heart disease.`
    },
    {
        Title:"📱 “Screens Harm Your Sleep”",
        Fact:`📵  Blue light from screens blocks melatonin, your natural sleep hormone.
Using gadgets at night leads to difficulty falling asleep and poor sleep quality.`,
        HealthImpact:`Disrupted sleep cycles impact mental clarity, mood, and health over time.`
    },
    {
        Title:"😌 “Meditation Boosts Mental Health”",
        Fact:`🧘 Daily meditation calms your nervous system and improves emotional regulation.
It helps reduce anxiety, stress, and enhances focus and productivity.`,
        HealthImpact:`Just 10 minutes a day can rewire your brain for peace and clarity.`
    },
    {
        Title:"🧴 “Handwashing Saves Lives”",
        Fact:`🧼  Proper handwashing prevents the spread of viruses and harmful bacteria.
It protects against colds, flu, stomach infections, and even COVID-19.`,
        HealthImpact:` It’s a simple yet powerful habit to prevent up to 60% of infections.`
    },
    {
        Title:"🩺 “Water Boosts Brain Power”",
        Fact:`💧 Drinking enough water each day improves brain function, concentration, and mood.
It helps maintain optimal cognitive performance and prevents mental fatigue.`,
        HealthImpact:`Dehydration, even at low levels, can impair short-term memory and alertness.`
    }
]
const Expert=[
    {
        Name:`👨‍⚕️ Dr. Rajesh Sharma`,
        Specialization: ` Senior Cardiologist`,
        Experience:`15 years of experience`,
        Profile:`Dr. Sharma is a leading expert in heart care with over a decade of hands-on experience.
He has successfully treated thousands of patients with complex cardiac issues.
Patients value his sharp diagnosis, modern treatmentand compassionate approach.`,
        Img:Rajesh
    },
    {
        Name:`👩‍⚕️ Dr. Meera Banerjee`,
        Specialization: ` Pediatrician`,
        Experience:`12 years of experience`,
        Profile:`Dr. Meera specializes in child health and wellness from newborns to teens.
She is known for making children feel safe and comfortable during consultations.
Her preventive care advice and gentle nature are trusted by parents across the city.`,
        Img:Meera
    },
    {
        Name:`👩‍⚕️ Nurse Anjali Singh`,
        Specialization: `ICU and Emergency Nurse`,
        Experience:`10 years of experience`,
        Profile:`Anjali has handled critical care cases with utmost professionalism and calm.
She excels in patient monitoring, emergency response, and emotional support.
Her empathy and discipline make her a pillar in the intensive care unit.`,
        Img:Anjali
    },
    
    {
        Name:`👩‍⚕️ Dr. Neha Deshmukh`,
        Specialization: ` Senior Gynecologist and Obstetrician`,
        Experience:`14 years of experience`,
        Profile:`Dr. Neha Deshmukh specializes in women’s reproductive health, prenatal care, and safe deliveries.
She has helped hundreds of women through complex pregnancies and gynecological concerns.`,
        Img:Neha
},
{
        Name:`🧑‍⚕️ Dr. Aniket Patil`,
        Specialization: `Neurologist`,
        Experience:`10 years of experience`,
        Profile:`Dr. Aniket is highly skilled in treating migraines, seizures, and nerve disorders.
He’s known for making complex neurological conditions easy to understand for patients.
He believes in patient education as a powerful tool for healing.`,
        Img:Aniket
    },
    {
        Name:`👩‍⚕️ Dr. Sana Khan`,
        Specialization: `Dermatologist`,
        Experience:`9 years of experience`,
        Profile:`Dr. Sana offers treatments for skin, hair, and nail conditions using the latest techniques.
She helps patients improve both their skin health and self-confidence.
Friendly and thorough, she balances aesthetics with medical precision.`,
        Img:Sana
    },
    
]
const Testimonials=[
    {
        Name:`🧑‍🦱 Ravi Kulkarni`,
        Review:`“I had recurring chest pain and was scared to visit clinics. 
        MediCare+ helped me connect with a doctor online and get diagnosed quickly.”`,
        Outcome: `Early-stage heart issue was caught on time. I'm much healthier now!`
    },
    {
        Name:`👩 Neha Patil`,
        Review:`“As a new mother, I often worried about my baby's health. I used MediCare+ to ask nurses simple queries and follow remedies.”`,
        Outcome: `Got peace of mind without visiting hospitals repeatedly.`
    },
    {
        Name:`🧓 Vishwanath Joshi`,
        Review:`“I’m 62 and diabetic. I used to forget medicine timings. MediCare+ reminded me, and the nurse helped update my chart regularly.”`,
        Outcome: `My sugar levels are now under control. I feel supported daily!`
    },
]
export {MEDICINES,FRUITS,SYMPTOMS,GovtScheme,WhychooseCard,FunFact,Expert,Testimonials}