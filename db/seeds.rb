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
    loan_description: "'Are you planning to follow a career in Magical Law, Miss Granger?' asked Scrimgeour. 'No, I’m not,' retorted Hermione. 'I’m hoping to do some good in the world!'",
    total_amount: 1500,
    loan_length: 6,
    deadline: "2020-12-01")
loan1photo = open('https://giva-dev.s3.amazonaws.com/harrypotter/hermoine.jpeg')
loan1.loan_photo.attach(io: loan1photo, filename:'hermoine.jpeg')           