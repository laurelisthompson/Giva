# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Loan.destroy_all

User.create(
    first_name: "Demo",
    last_name: "User",
    email: "demouser",
    password_digest: BCrypt::Password.create('password'),
    session_token: SecureRandom.base64
)

loan1 = Loan.create(
    loan_name: "Hermoine Granger",
    location: "Hogwarts",
    type_category: "Women",
    loan_description: "But from that moment on, Hermione Granger became their friend. Because there are somethings you can't go through in life and become friends, and knocking out a twelve-foot mountain troll is one of them.",
    total_amount: 1500,
    loan_length: 6,
    deadline: "2025-12-01")
loan1photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/hermoine.jpeg')
loan1.loan_photo.attach(io: loan1photo, filename:'hermoine.jpeg')    
       
loan2 = Loan.create(
    loan_name: "Pomona Sprout",
    location: "Hogwarts",
    type_category: "Agriculture",
    loan_description: "We will be able to cure her, Argus. Professor Sprout recently managed to procure some Mandrakes. As soon as they have reached their full size, I will have a potion made that will revive Mrs Norris.",
    total_amount: 1000,
    loan_length: 3,
    deadline: "2025-12-01")
loan2photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/pomona-sprout.jpeg')
loan2.loan_photo.attach(io: loan2photo, filename:'pomona-sprout.jpeg')    

loan3 = Loan.create(
    loan_name: "Jawa",
    location: "A Galaxy Far Far Away",
    type_category: "Livestock",
    loan_description: "A beton nya mombay m'bwa! Shumeneez un toyneepa.",
    total_amount: 6500,
    loan_length: 9,
    deadline: "2025-12-01")
loan3photo = open('https://giva-seeding.s3.amazonaws.com/starwars/jawa.jpeg')
loan3.loan_photo.attach(io: loan3photo, filename:'jawa.jpeg')    

loan4 = Loan.create(
    loan_name: "Eowyn",
    location: "Middle Earth",
    type_category: "Women",
    loan_description: "I want to be a healer, and love all things that grow and are not barren.",
    total_amount: 3100,
    loan_length: 8,
    deadline: "2025-12-01")
loan4photo = open('https://giva-seeding.s3.amazonaws.com/lotr/eowyn.jpeg')
loan4.loan_photo.attach(io: loan4photo, filename:'eowyn.jpeg')    

loan5 = Loan.create(
    loan_name: "Rey",
    location: "A Galaxy Far Far Away",
    type_category: "Women",
    loan_description: "Something inside me has always been there. But now it's awake. And I'm afraid. I don't know what it is or what to do with it. And I need help.",
    total_amount: 7500,
    loan_length: 10,
    deadline: "2025-12-01")
loan5photo = open('https://giva-seeding.s3.amazonaws.com/starwars/rey.png')
loan5.loan_photo.attach(io: loan5photo, filename:'rey.png') 

loan6 = Loan.create(
    loan_name: "Ron Weasley",
    location: "Hogwarts",
    type_category: "Eco-friendly",
    loan_description: "Ronald Weasley, who has always been overshadowed by his brothers, sees himself standing alone, the best of all of them. However, this mirror will give us neither knowledge or truth.",
    total_amount: 4300,
    loan_length: 11,
    deadline: "2025-12-01")
loan6photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/ron_weasley.jpeg')
loan6.loan_photo.attach(io: loan6photo, filename:'ron_weasley.jpeg')   

loan7 = Loan.create(
    loan_name: "Poe Dameron",
    location: "A Galaxy Far Far Away",
    type_category: "Refugees",
    loan_description: "Look, I can't hold forever. If you reach him, tell him Leia has an urgent message for him...",
    total_amount: 800,
    loan_length: 3,
    deadline: "2025-12-01")
loan7photo = open('https://giva-seeding.s3.amazonaws.com/starwars/poe_dameron.jpeg')
loan7.loan_photo.attach(io: loan7photo, filename:'poe_dameron.jpeg')  

loan8 = Loan.create(
    loan_name: "Galadriel",
    location: "Middle Earth",
    type_category: "Eco-friendly",
    loan_description: "The sound of her footsteps was like a stream falling gently downhill over cool stones in the quiet of night.",
    total_amount: 3000,
    loan_length: 7,
    deadline: "2025-12-01")
loan8photo = open('https://giva-seeding.s3.amazonaws.com/lotr/galadriel.jpeg')
loan8.loan_photo.attach(io: loan8photo, filename:'galadriel.jpeg')  

loan9 = Loan.create(
    loan_name: "Stormtrooper #4783",
    location: "A Galaxy Far Far Away",
    type_category: "Domestic",
    loan_description: "Skywalker? No one told me anything about Skywalker! I’m getting outta here!",
    total_amount: 9800,
    loan_length: 13,
    deadline: "2025-12-01")
loan9photo = open('https://giva-seeding.s3.amazonaws.com/starwars/stormtrooper.jpeg')
loan9.loan_photo.attach(io: loan9photo, filename:'stormtrooper.jpeg')  

loan10 = Loan.create(
    loan_name: "Frodo Baggins",
    location: "Middle Earth",
    type_category: "Refugees",
    loan_description: "I feel that as long as the Shire lies behind, safe and comfortable, I shall find wandering more bearable: I shall know that somewhere there is a firm foothold, even if my feet cannot stand there again.",
    total_amount: 4500,
    loan_length: 12,
    deadline: "2025-12-01")
loan10photo = open('https://giva-seeding.s3.amazonaws.com/lotr/frodo.jpeg')
loan10.loan_photo.attach(io: loan10photo, filename:'frodo.jpeg')  

loan11 = Loan.create(
    loan_name: "Bilbo Baggins",
    location: "Middle Earth",
    type_category: "Eco-friendly",
    loan_description: "I know I don't look old, but I'm beginning to feel it in my heart... I need a holiday. A very long holiday. And I don't expect I shall return.",
    total_amount: 2300,
    loan_length: 7,
    deadline: "2025-12-01")
loan11photo = open('https://giva-seeding.s3.amazonaws.com/lotr/bilbo+baggins.jpeg')
loan11.loan_photo.attach(io: loan11photo, filename:'bilbo+baggins.jpeg')  

loan12 = Loan.create(
    loan_name: "Maz Kanata",
    location: "A Galaxy Far Far Away",
    type_category: "Domestic",
    loan_description: "Hope is not lost today. It is found.",
    total_amount: 2000,
    loan_length: 5,
    deadline: "2025-12-01")
loan12photo = open('https://giva-seeding.s3.amazonaws.com/starwars/maz_kanata.jpeg')
loan12.loan_photo.attach(io: loan12photo, filename:'maz_kanata.jpeg')  

loan13 = Loan.create(
    loan_name: "Leia Organa",
    location: "A Galaxy Far Far Away",
    type_category: "Women",
    loan_description: "Help me, Obi-Wan Kenobi. You’re my only hope.",
    total_amount: 1000,
    loan_length: 6,
    deadline: "2025-12-01")
loan13photo = open('https://giva-seeding.s3.amazonaws.com/starwars/leia_organa.jpeg')
loan13.loan_photo.attach(io: loan13photo, filename:'leia_organa.jpeg')  

loan14 = Loan.create(
    loan_name: "Jabba the Hutt",
    location: "A Galaxy Far Far Away",
    type_category: "Livestock",
    loan_description: "You will soon learn to appreciate me.",
    total_amount: 7200,
    loan_length: 9,
    deadline: "2025-12-01")
loan14photo = open('https://giva-seeding.s3.amazonaws.com/starwars/jabba_the_hutt.jpeg')
loan14.loan_photo.attach(io: loan14photo, filename:'jabba_the_hutt.jpeg')  

loan15 = Loan.create(
    loan_name: "Molly Weasley",
    location: "Hogwarts",
    type_category: "Eco-friendly",
    loan_description: "A good first impression can work wonders.",
    total_amount: 3600,
    loan_length: 4,
    deadline: "2025-12-01")
loan15photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/molly-weasley.jpeg')
loan15.loan_photo.attach(io: loan15photo, filename:'molly-weasley.jpeg')  

loan16 = Loan.create(
    loan_name: "Fred Weasley",
    location: "Hogwarts",
    type_category: "Education",
    loan_description: "I think we’ve outgrown full-time education... Time to test our talents in the real world, d’you reckon?",
    total_amount: 15000,
    loan_length: 14,
    deadline: "2025-12-01")
loan16photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/fred-weasley.jpeg')
loan16.loan_photo.attach(io: loan16photo, filename:'fred-weasley.jpeg')  

loan17 = Loan.create(
    loan_name: "Arthur Weasley",
    location: "Hogwarts",
    type_category: "Education",
    loan_description: "Now, Harry you must know all about Muggles, tell me, what exactly is the function of a rubber duck?",
    total_amount: 4000,
    loan_length: 10,
    deadline: "2025-12-01")
loan17photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/arthur-weasley.jpeg')
loan17.loan_photo.attach(io: loan17photo, filename:'arthur-weasley.jpeg')  

loan18 = Loan.create(
    loan_name: "Yoda",
    location: "A Galaxy Far Far Away",
    type_category: "Eco-friendly",
    loan_description: "Donate you must.",
    total_amount: 2600,
    loan_length: 5,
    deadline: "2025-12-01")
loan18photo = open('https://giva-seeding.s3.amazonaws.com/starwars/yoda.jpeg')
loan18.loan_photo.attach(io: loan18photo, filename:'yoda.jpeg')  

loan19 = Loan.create(
    loan_name: "Newt Scamander",
    location: "Hogwarts",
    type_category: "Livestock",
    loan_description: "You don't seek power or popularity. You simply ask, is the thing right in itself? If it is, then I must do it, no matter the cost.",
    total_amount: 6700,
    loan_length: 10,
    deadline: "2025-12-01")
loan19photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/newt_scamander.jpeg')
loan19.loan_photo.attach(io: loan19photo, filename:'newt_scamander.jpeg')  

loan20 = Loan.create(
    loan_name: "Vizzini",
    location: "Florin",
    type_category: "Education",
    loan_description: "INCONCEIVABLE!",
    total_amount: 5000,
    loan_length: 1,
    deadline: "2025-12-01")
loan20photo = open('https://giva-seeding.s3.amazonaws.com/princessbride/vizzini.jpeg')
loan20.loan_photo.attach(io: loan20photo, filename:'vizzini.jpeg')  

loan21 = Loan.create(
    loan_name: "Qui-Gon Jinn",
    location: "A Galaxy Far Far Away",
    type_category: "Domestic",
    loan_description: "Remember: Your focus determines your reality.",
    total_amount: 3000,
    loan_length: 8,
    deadline: "2025-12-01")
loan21photo = open('https://giva-seeding.s3.amazonaws.com/starwars/qui-gon_jinn.jpeg')
loan21.loan_photo.attach(io: loan21photo, filename:'qui-gon_jinn.jpeg')  

loan22 = Loan.create(
    loan_name: "Nymphadora Tonks",
    location: "Hogwarts",
    type_category: "Women",
    loan_description: "Don't call me Nymphadora, Remus.",
    total_amount: 500,
    loan_length: 3,
    deadline: "2025-12-01")
loan22photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/nymphadora-tonks.jpeg')
loan22.loan_photo.attach(io: loan22photo, filename:'nymphadora-tonks.jpeg')  

loan23 = Loan.create(
    loan_name: "Han Solo",
    location: "A Galaxy Far Far Away",
    type_category: "Refugees",
    loan_description: "I used to wonder about that myself. Thought it was a bunch of mumbo-jumbo. A magical power holding together good and evil, the dark side and the light? Crazy thing is, it’s true. The Force, the Jedi — all of it.",
    total_amount: 4900,
    loan_length: 7,
    deadline: "2025-12-01")
loan23photo = open('https://giva-seeding.s3.amazonaws.com/starwars/han+solo.jpeg')
loan23.loan_photo.attach(io: loan23photo, filename:'han+solo.jpeg')  

loan24 = Loan.create(
    loan_name: "Mace Windu",
    location: "A Galaxy Far Far Away",
    type_category: "Eco-friendly",
    loan_description: "The Jedi Council will have to take control of the Senate to ensure a peaceful transition.",
    total_amount: 3300,
    loan_length: 6,
    deadline: "2025-12-01")
loan24photo = open('https://giva-seeding.s3.amazonaws.com/starwars/mace_windu.jpeg')
loan24.loan_photo.attach(io: loan24photo, filename:'mace_windu.jpeg')  

loan25 = Loan.create(
    loan_name: "Harry Potter",
    location: "Hogwarts",
    type_category: "Eco-friendly",
    loan_description: "I solemnly swear I am up to no good.",
    total_amount: 3800,
    loan_length: 8,
    deadline: "2025-12-01")
loan25photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/harry-potter.jpeg')
loan25.loan_photo.attach(io: loan25photo, filename:'harry-potter.jpeg')  

loan26 = Loan.create(
    loan_name: "Inigo Montoya",
    location: "Florin",
    type_category: "Arts",
    loan_description: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
    total_amount: 7300,
    loan_length: 14,
    deadline: "2025-12-01")
loan26photo = open('https://giva-seeding.s3.amazonaws.com/princessbride/inigo_montoya.png')
loan26.loan_photo.attach(io: loan26photo, filename:'inigo_montoya.png')  

loan27 = Loan.create(
    loan_name: "Dobby",
    location: "Hogwarts",
    type_category: "Domestic",
    loan_description: "Such a beautiful place it is, to be with friends. Dobby is happy to be with his friend, Harry Potter.",
    total_amount: 3,
    loan_length: 900,
    deadline: "2025-12-01")
loan27photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/dobby.jpeg')
loan27.loan_photo.attach(io: loan27photo, filename:'dobby.jpeg')  

loan28 = Loan.create(
    loan_name: "Sirius Black",
    location: "Hogwarts",
    type_category: "Refugees",
    loan_description: "We stick together and look out for each other. Because you four are all I’ve got left. And I’m not going to see you die. Forever alive, all right? We’re not going to die.",
    total_amount: 2800,
    loan_length: 1,
    deadline: "2025-12-01")
loan28photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/sirius-black.jpeg')
loan28.loan_photo.attach(io: loan28photo, filename:'sirius-black.jpeg')  

loan29 = Loan.create(
    loan_name: "Saruman",
    location: "Middle Earth",
    type_category: "Agriculture",
    loan_description: "I gave you the chance of aiding me willingly, but you have elected the way of pain!",
    total_amount: 2500,
    loan_length: 3,
    deadline: "2025-12-01")
loan29photo = open('https://giva-seeding.s3.amazonaws.com/lotr/saruman.jpeg')
loan29.loan_photo.attach(io: loan29photo, filename:'saruman.jpeg')  

loan30 = Loan.create(
    loan_name: "Remus Lupin",
    location: "Hogwarts",
    type_category: "Arts",
    loan_description: "Your parents gave their lives to keep you alive, Harry. A poor way to repay them - gambling their sacrifice for a bag of magic tricks.",
    total_amount: 3400,
    loan_length: 6,
    deadline: "2025-12-01")
loan30photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/remus+lupin.jpeg')
loan30.loan_photo.attach(io: loan30photo, filename:'remus+lupin.jpeg')  

loan31 = Loan.create(
    loan_name: "Arwen",
    location: "Middle Earth",
    type_category: "Women",
    loan_description: "And to that I hold. I would rather share one lifetime with you than face all the ages of this world alone.",
    total_amount: 2400,
    loan_length: 12,
    deadline: "2020-12-01")
loan31photo = open('https://giva-seeding.s3.amazonaws.com/lotr/arwen.jpeg')
loan31.loan_photo.attach(io: loan31photo, filename:'arwen.jpeg')

loan32 = Loan.create(
    loan_name: "Gilderoy Lockhart",
    location: "Hogwarts",
    type_category: "Domestic",
    loan_description: "AMAZING! This is just like magic!",
    total_amount: 8290,
    loan_length: 50,
    deadline: "2020-12-01")
loan32photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/gilderoy_lockhart.jpeg')
loan32.loan_photo.attach(io: loan32photo, filename:'gilderoy_lockhart.jpeg')

loan33 = Loan.create(
    loan_name: "Anakin Skywalker",
    location: "A Galaxy Far Far Away",
    type_category: "Arts",
    loan_description: "What have I done?",
    total_amount: 2840,
    loan_length: 12,
    deadline: "2020-12-01")
loan33photo = open('https://giva-seeding.s3.amazonaws.com/starwars/anakin_skywalker.jpeg')
loan33.loan_photo.attach(io: loan33photo, filename:'anakin_skywalker.jpeg')

loan34 = Loan.create(
    loan_name: "Faramir",
    location: "Middle Earth",
    type_category: "Livestock",
    loan_description: "In this hour, I do not believe that any darkness will endure.",
    total_amount: 1200,
    loan_length: 4,
    deadline: "2020-12-01")
loan34photo = open('https://giva-seeding.s3.amazonaws.com/lotr/faramir.jpeg')
loan34.loan_photo.attach(io: loan34photo, filename:'faramir.jpeg')

loan35 = Loan.create(
    loan_name: "Jyn Erso",
    location: "A Galaxy Far Far Away",
    type_category: "Women",
    loan_description: "We have hope. Rebellions are built on hope.",
    total_amount: 9000,
    loan_length: 1,
    deadline: "2020-12-01")
loan35photo = open('https://giva-seeding.s3.amazonaws.com/starwars/jyn+erso.jpeg')
loan35.loan_photo.attach(io: loan35photo, filename:'jyn+erso.jpeg')

loan36 = Loan.create(
    loan_name: "Alastor Moody",
    location: "Hogwarts",
    type_category: "Education",
    loan_description: "Nothing like a nighttime stroll to give you ideas.",
    total_amount: 4000,
    loan_length: 8,
    deadline: "2020-12-01")
loan36photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/alastor_moody.jpeg')
loan36.loan_photo.attach(io: loan36photo, filename:'alastor_moody.jpeg')

loan37 = Loan.create(
    loan_name: "Man in Black",
    location: "Florin",
    type_category: "Refugees",
    loan_description: "I will always come for you.",
    total_amount: 3000,
    loan_length: 5,
    deadline: "2020-12-01")
loan37photo = open('https://giva-seeding.s3.amazonaws.com/princessbride/man_in_black.jpeg')
loan37.loan_photo.attach(io: loan37photo, filename:'man_in_black.jpeg')

loan38 = Loan.create(
    loan_name: "Madame Pomfrey",
    location: "Hogwarts",
    type_category: "Refugees",
    loan_description: "According to Madam Pomfrey, thoughts could leave deeper scars than almost anything else.",
    total_amount: 2000,
    loan_length: 6,
    deadline: "2020-12-01")
loan38photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/madame-pomfrey.jpeg')
loan38.loan_photo.attach(io: loan38photo, filename:'madame-pomfrey.jpeg')

loan39 = Loan.create(
    loan_name: "Kili",
    location: "Middle Earth",
    type_category: "Livestock",
    loan_description: "This huge fire moon lighting our path. I wish I could show you...",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan39photo = open('https://giva-seeding.s3.amazonaws.com/lotr/kili.jpeg')
loan39.loan_photo.attach(io: loan39photo, filename:'kili.jpeg')

loan40 = Loan.create(
    loan_name: "Ginny Weasley",
    location: "Hogwarts",
    type_category: "Women",
    loan_description: "I never really gave up on you. Not really.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan40photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/ginny-weasley.jpeg')
loan40.loan_photo.attach(io: loan40photo, filename:'ginny-weasley.jpeg')

loan41 = Loan.create(
    loan_name: "Obi-Wan Kenobi",
    location: "A Galaxy Far Far Away",
    type_category: "Education",
    loan_description: "You’re going to find that many of the truths we cling to depend greatly on our own point of view.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan41photo = open('https://giva-seeding.s3.amazonaws.com/starwars/obi_wan_kenobi.png')
loan41.loan_photo.attach(io: loan41photo, filename:'obi_wan_kenobi.png')

loan42 = Loan.create(
    loan_name: "Xenophilius Lovegood",
    location: "Hogwarts",
    type_category: "Arts",
    loan_description: "The Cloak of Invisibility. Together, they make the Deathly Hallows. Together, they make one master of death.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan42photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/xenophilius_lovegood.jpeg')
loan42.loan_photo.attach(io: loan42photo, filename:'xenophilius_lovegood.jpeg')

loan43 = Loan.create(
    loan_name: "Rosie Cotton",
    location: "Middle Earth",
    type_category: "Agriculture",
    loan_description: "But I thought I’d have a look and see how Mrs. Cotton was keeping, and you, Rosie.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan43photo = open('https://giva-seeding.s3.amazonaws.com/lotr/rosie_cotton.jpeg')
loan43.loan_photo.attach(io: loan43photo, filename:'rosie_cotton.jpeg')

loan44 = Loan.create(
    loan_name: "Charlie Weasley",
    location: "Hogwarts",
    type_category: "Livestock",
    loan_description: "How's yer brother Charlie? I liked him a lot — great with animals.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan44photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/charlie_weasley.jpeg')
loan44.loan_photo.attach(io: loan44photo, filename:'charlie_weasley.jpeg')

loan45 = Loan.create(
    loan_name: "Admiral Ackbar",
    location: "A Galaxy Far Far Away",
    type_category: "Education",
    loan_description: "It's a trap!",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan45photo = open('https://giva-seeding.s3.amazonaws.com/starwars/admiral_ackbar.jpeg')
loan45.loan_photo.attach(io: loan45photo, filename:'admiral_ackbar.jpeg')

loan46 = Loan.create(
    loan_name: "Aragorn",
    location: "Middle Earth",
    type_category: "Refugees",
    loan_description: "If by my life or death I can protect you, I will.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan46photo = open('https://giva-seeding.s3.amazonaws.com/lotr/aragorn.png')
loan46.loan_photo.attach(io: loan46photo, filename:'aragorn.png')

loan47 = Loan.create(
    loan_name: "Pippin",
    location: "Middle Earth",
    type_category: "Agriculture",
    loan_description: "Do you really mean to start before the break of day?",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan47photo = open('https://giva-seeding.s3.amazonaws.com/lotr/pippin.jpeg')
loan47.loan_photo.attach(io: loan47photo, filename:'pippin.jpeg')

loan48 = Loan.create(
    loan_name: "Chewbacca",
    location: "A Galaxy Far Far Away",
    type_category: "Livestock",
    loan_description: "RWGWGWARAHHHHWWGRW.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan48photo = open('https://giva-seeding.s3.amazonaws.com/starwars/chewbacca.jpeg')
loan48.loan_photo.attach(io: loan48photo, filename:'chewbacca.jpeg')

loan49 = Loan.create(
    loan_name: "Lando Calrissian",
    location: "A Galaxy Far Far Away",
    type_category: "Arts",
    loan_description: "I’ll take good care of her. She won’t get a scratch.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan49photo = open('https://giva-seeding.s3.amazonaws.com/starwars/lando_calrissian.jpeg')
loan49.loan_photo.attach(io: loan49photo, filename:'lando_calrissian.jpeg')

loan50 = Loan.create(
    loan_name: "Gandalf",
    location: "Middle Earth",
    type_category: "Education",
    loan_description: "All we have to do is decide what to do with the time that is given to us.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan50photo = open('https://giva-seeding.s3.amazonaws.com/lotr/gandalf.jpeg')
loan50.loan_photo.attach(io: loan50photo, filename:'gandalf.jpeg')

loan52 = Loan.create(
    loan_name: "George Weasley",
    location: "Hogwarts",
    type_category: "Arts",
    loan_description: "Mischief Managed.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan52photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/george_weasley.jpeg')
loan52.loan_photo.attach(io: loan52photo, filename:'george_weasley.jpeg')

loan53 = Loan.create(
    loan_name: "Fezzik",
    location: "Florin",
    type_category: "Domestic",
    loan_description: "I just want you to feel you're doing well.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan53photo = open('https://giva-seeding.s3.amazonaws.com/princessbride/fezzik.png')
loan53.loan_photo.attach(io: loan53photo, filename:'fezzik.png')

loan54 = Loan.create(
    loan_name: "Albus Dumbledore",
    location: "Hogwarts",
    type_category: "Domestic",
    loan_description: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan54photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/albus-dumbledore.jpeg')
loan54.loan_photo.attach(io: loan54photo, filename:'albus-dumbledore.jpeg')

loan55 = Loan.create(
    loan_name: "King Theoden",
    location: "Middle Earth",
    type_category: "Domestic",
    loan_description: "Let this be the hour when we draw swords together.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan55photo = open('https://giva-seeding.s3.amazonaws.com/lotr/king_theoden.jpeg')
loan55.loan_photo.attach(io: loan55photo, filename:'king_theoden.jpeg')

loan56 = Loan.create(
    loan_name: "R2-D2",
    location: "A Galaxy Far Far Away",
    type_category: "Refugees",
    loan_description: "[beep beep beep boop]",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan56photo = open('https://giva-seeding.s3.amazonaws.com/starwars/r2d2.jpeg')
loan56.loan_photo.attach(io: loan56photo, filename:'r2d2.jpeg')

loan57 = Loan.create(
    loan_name: "Fili",
    location: "Middle Earth",
    type_category: "Agriculture",
    loan_description: "At your service.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan57photo = open('https://giva-seeding.s3.amazonaws.com/lotr/fili.jpeg')
loan57.loan_photo.attach(io: loan57photo, filename:'fili.jpeg')

loan58 = Loan.create(
    loan_name: "Gimli",
    location: "Middle Earth",
    type_category: "Eco-friendly",
    loan_description: "Let them come. There is one Dwarf yet in Moria who still draws breath.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan58photo = open('https://giva-seeding.s3.amazonaws.com/lotr/gimli.png')
loan58.loan_photo.attach(io: loan58photo, filename:'gimli.png')

loan59 = Loan.create(
    loan_name: "Luna Lovegood",
    location: "Hogwarts",
    type_category: "Arts",
    loan_description: "My mum always said things we lose have a way of coming back to us in the end. If not always in the ways we expect",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan59photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/luna-lovegood.jpeg')
loan59.loan_photo.attach(io: loan59photo, filename:'luna-lovegood.jpeg')

loan60 = Loan.create(
    loan_name: "Uncle Owen",
    location: "A Galaxy Far Far Away",
    type_category: "Agriculture",
    loan_description: "Have you seen Luke this morning?",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan60photo = open('https://giva-seeding.s3.amazonaws.com/starwars/uncle_owen.jpeg')
loan60.loan_photo.attach(io: loan60photo, filename:'uncle_owen.jpeg')

loan61 = Loan.create(
    loan_name: "Severus Snape",
    location: "Hogwarts",
    type_category: "Refugees",
    loan_description: "Always.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan61photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/severus_snape.jpeg')
loan61.loan_photo.attach(io: loan61photo, filename:'severus_snape.jpeg')

loan62 = Loan.create(
    loan_name: "Lavender Brown",
    location: "Hogwarts",
    type_category: "Arts",
    loan_description: "Where is he? Where's my Won-Won? Has he been asking for me?",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan62photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/lavender-brown.jpeg')
loan62.loan_photo.attach(io: loan62photo, filename:'lavender-brown.jpeg')

loan63 = Loan.create(
    loan_name: "Boromir",
    location: "Middle Earth",
    type_category: "Agriculture",
    loan_description: "Our people, our people. I would have followed you, my brother... my captain... my king.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan63photo = open('https://giva-seeding.s3.amazonaws.com/lotr/boromir.jpeg')
loan63.loan_photo.attach(io: loan63photo, filename:'boromir.jpeg')

loan64 = Loan.create(
    loan_name: "Padmé Amidala",
    location: "A Galaxy Far Far Away",
    type_category: "Women",
    loan_description: "My place is with my people.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan64photo = open('https://giva-seeding.s3.amazonaws.com/starwars/padme_amidala.png')
loan64.loan_photo.attach(io: loan64photo, filename:'padme_amidala.png')

loan65 = Loan.create(
    loan_name: "Elrond",
    location: "Middle Earth",
    type_category: "Education",
    loan_description: "Our list of allies grows thin.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan65photo = open('https://giva-seeding.s3.amazonaws.com/lotr/elrond.jpeg')
loan65.loan_photo.attach(io: loan65photo, filename:'elrond.jpeg')

loan66 = Loan.create(
    loan_name: "Merry",
    location: "Middle Earth",
    type_category: "Arts",
    loan_description: "Great! Where are we going?",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan66photo = open('https://giva-seeding.s3.amazonaws.com/lotr/merry.jpeg')
loan66.loan_photo.attach(io: loan66photo, filename:'merry.jpeg')

loan67 = Loan.create(
    loan_name: "BB-8",
    location: "A Galaxy Far Far Away",
    type_category: "Eco-friendly",
    loan_description: "[be ba be bo o oww]",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan67photo = open('https://giva-seeding.s3.amazonaws.com/starwars/bb8.jpeg')
loan67.loan_photo.attach(io: loan67photo, filename:'bb8.jpeg')

loan68 = Loan.create(
    loan_name: "Luke Skywalker",
    location: "A Galaxy Far Far Away",
    type_category: "Eco-friendly",
    loan_description: "I want to learn the ways of the Force, and become a Jedi like my father.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan68photo = open('https://giva-seeding.s3.amazonaws.com/starwars/luke_skywalker.jpeg')
loan68.loan_photo.attach(io: loan68photo, filename:'luke_skywalker.jpeg')

loan69 = Loan.create(
    loan_name: "Neville Longbottom",
    location: "Hogwarts",
    type_category: "Agriculture",
    loan_description: "The thing is, it helps when people stand up to them. It gives everyone hope.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan69photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/neville-longbottom.jpeg')
loan69.loan_photo.attach(io: loan69photo, filename:'neville-longbottom.jpeg')

loan70 = Loan.create(
    loan_name: "Westley",
    location: "Florin",
    type_category: "Livestock",
    loan_description: "As you wish.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan70photo = open('https://giva-seeding.s3.amazonaws.com/princessbride/westley.jpeg')
loan70.loan_photo.attach(io: loan70photo, filename:'westley.jpeg')

loan71 = Loan.create(
    loan_name: "Princess Buttercup",
    location: "Florin",
    type_category: "Women",
    loan_description: "It comes to this. I love Westley. I always have. I know now, I always will.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan71photo = open('https://giva-seeding.s3.amazonaws.com/princessbride/buttercup.png')
loan71.loan_photo.attach(io: loan71photo, filename:'buttercup.png')

loan72 = Loan.create(
    loan_name: "Minerva McGonagall",
    location: "Hogwarts",
    type_category: "Education",
    loan_description: "Bravery doesn't forgive stupidity.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan72photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/minerva-mcgonagall.jpeg')
loan72.loan_photo.attach(io: loan72photo, filename:'minerva-mcgonagall.jpeg')

loan73 = Loan.create(
    loan_name: "Thorin Oakenshield",
    location: "Middle Earth",
    type_category: "Refugees",
    loan_description: "Go back to your books and your archair, plant your trees, watch them grow. If more people valued home above gold this world would be a merrier place.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan73photo = open('https://giva-seeding.s3.amazonaws.com/lotr/thorin_oakenshield.jpeg')
loan73.loan_photo.attach(io: loan73photo, filename:'thorin_oakenshield.jpeg')

loan74 = Loan.create(
    loan_name: "C-3PO",
    location: "A Galaxy Far Far Away",
    type_category: "Domestic",
    loan_description: "Why doesn't anyone listen to me?",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan74photo = open('https://giva-seeding.s3.amazonaws.com/starwars/c3po.jpeg')
loan74.loan_photo.attach(io: loan74photo, filename:'c3po.jpeg')

loan75 = Loan.create(
    loan_name: "Finn",
    location: "A Galaxy Far Far Away",
    type_category: "Arts",
    loan_description: "Because it's the right thing to do.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan75photo = open('https://giva-seeding.s3.amazonaws.com/starwars/finn.jpeg')
loan75.loan_photo.attach(io: loan75photo, filename:'finn.jpeg')

loan76 = Loan.create(
    loan_name: "Eomer",
    location: "Middle Earth",
    type_category: "Domestic",
    loan_description: "I do not doubt his heart, only the reach of his arm.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan76photo = open('https://giva-seeding.s3.amazonaws.com/lotr/eomer.png')
loan76.loan_photo.attach(io: loan76photo, filename:'eomer.png')

loan77 = Loan.create(
    loan_name: "Rubeus Hagrid",
    location: "Hogwarts",
    type_category: "Livestock",
    loan_description: "What’s comin’ will come, an’ we’ll meet it when it does.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan77photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/rubeus-hagrid.jpeg')
loan77.loan_photo.attach(io: loan77photo, filename:'rubeus-hagrid.jpeg')

loan78 = Loan.create(
    loan_name: "Legolas",
    location: "Middle Earth",
    type_category: "Arts",
    loan_description: "Shall I describe it to you? Or would you like me to find you a box?",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan78photo = open('https://giva-seeding.s3.amazonaws.com/lotr/legolas.jpeg')
loan78.loan_photo.attach(io: loan78photo, filename:'legolas.jpeg')

loan79 = Loan.create(
    loan_name: "Samwise Gamgee",
    location: "Middle Earth",
    type_category: "Agriculture",
    loan_description: "There's some good in this world, Mr. Frodo, and it's worth fighting for",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan79photo = open('https://giva-seeding.s3.amazonaws.com/lotr/samwise_gamgee.jpeg')
loan79.loan_photo.attach(io: loan79photo, filename:'samwise_gamgee.jpeg')

loan80 = Loan.create(
    loan_name: "Treebeard",
    location: "Middle Earth",
    type_category: "Agriculture",
    loan_description: "We never say anything unless it is worth taking a long time to say.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan80photo = open('https://giva-seeding.s3.amazonaws.com/lotr/treebeard.png')
loan80.loan_photo.attach(io: loan80photo, filename:'treebeard.png')

loan81 = Loan.create(
    loan_name: "Smeagol",
    location: "Middle Earth",
    type_category: "Agriculture",
    loan_description: "Good Sméagol always helps.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan81photo = open('https://giva-seeding.s3.amazonaws.com/lotr/smeagol.jpeg')
loan81.loan_photo.attach(io: loan81photo, filename:'smeagol.jpeg')

loan82 = Loan.create(
    loan_name: "Darth Vader",
    location: "A Galaxy Far Far Away",
    type_category: "Domestic",
    loan_description: "Be careful not to choke on your convictions.",
    total_amount: rand(500..8000),
    loan_length: rand(1..18),
    deadline: "2020-12-01")
loan82photo = open('https://giva-seeding.s3.amazonaws.com/starwars/darth_vader.jpeg')
loan82.loan_photo.attach(io: loan82photo, filename:'darth_vader.jpeg')