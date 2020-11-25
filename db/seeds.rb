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
    deadline: "2020-12-01")
loan1photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/hermoine.jpeg')
loan1.loan_photo.attach(io: loan1photo, filename:'hermoine.jpeg')    
       
loan2 = Loan.create(
    loan_name: "Pomona Sprout",
    location: "Hogwarts",
    type_category: "Agriculture",
    loan_description: "We will be able to cure her, Argus. Professor Sprout recently managed to procure some Mandrakes. As soon as they have reached their full size, I will have a potion made that will revive Mrs Norris.",
    total_amount: 1000,
    loan_length: 3,
    deadline: "2020-12-01")
loan2photo = open('https://giva-seeding.s3.amazonaws.com/harrypotter/pomona-sprout.jpeg')
loan2.loan_photo.attach(io: loan2photo, filename:'pomona-sprout.jpeg')    

loan3 = Loan.create(
    loan_name: "Jawa",
    location: "A Galaxy Far Far Away",
    type_category: "Livestock",
    loan_description: "A beton nya mombay m'bwa! Shumeneez un toyneepa.",
    total_amount: 6500,
    loan_length: 9,
    deadline: "2020-12-01")
loan3photo = open('https://giva-seeding.s3.amazonaws.com/starwars/jawa.jpeg')
loan3.loan_photo.attach(io: loan3photo, filename:'jawa.jpeg')    

loan4 = Loan.create(
    loan_name: "Eowyn",
    location: "Middle Earth",
    type_category: "Women",
    loan_description: "I want to be a healer, and love all things that grow and are not barren.",
    total_amount: 3100,
    loan_length: 8,
    deadline: "2020-12-01")
loan4photo = open('https://giva-seeding.s3.amazonaws.com/lotr/eowyn.jpeg')
loan4.loan_photo.attach(io: loan4photo, filename:'eowyn.jpeg')    

loan5 = Loan.create(
    loan_name: "Rey",
    location: "A Galaxy Far Far Away",
    type_category: "Women",
    loan_description: "Something inside me has always been there. But now it's awake. And I'm afraid. I don't know what it is or what to do with it. And I need help.",
    total_amount: 7500,
    loan_length: 10,
    deadline: "2020-12-01")
loan5photo = open('https://giva-seeding.s3.amazonaws.com/starwars/rey.png')
loan5.loan_photo.attach(io: loan5photo, filename:'rey.png')        