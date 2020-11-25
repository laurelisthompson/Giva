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
    loan_description: "Ronald Weasley, who has always been overshadowed by his brothers, sees himself standing alone, the best of all of them. However, this mirror will give us neither knowledge or truth. Men have wasted away before it, entranced by what they have seen, or been driven mad, not knowing if what it shows is real or even possible.",
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
    loan_description: "I should like to save the Shire, if I could - though there have been times when I thought the inhabitants too stupid and dull for words, and have felt that an earthquake or an invasion of dragons might be good for them. But I don't feel like that now. I feel that as long as the Shire lies behind, safe and comfortable, I shall find wandering more bearable: I shall know that somewhere there is a firm foothold, even if my feet cannot stand there again.",
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
    loan_description: "Where's the fun without a bit of risk?",
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
    loan_description: "Donate you must",
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
    loan_description: "I used to wonder about that myself. Thought it was a bunch of mumbo-jumbo. A magical power holding together good and evil, the dark side and the light? Crazy thing is, it’s true. The Force, the Jedi — all of it. It’s all true.",
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
    loan_description: "It was, he thought, the difference between being dragged into the arena to face a battle to the death and walking into the arena with your head held high. Some people, perhaps, would say that there was little to choose between the two ways, but Dumbledore knew — and so do I, thought Harry, with a rush of fierce pride, and so did my parents — that there was all the difference in the world.",
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
    loan_description: "There’s a bigger cause out there. It’s bigger than any of us here. But we stick together, all right? We stick together and look out for each other. Because you four are all I’ve got left. And I’m not going to see you die. Forever alive, all right? We’re not going to die.",
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