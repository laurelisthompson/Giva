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

Loan.create(
    loan_name: "Hermoine",
    location: "Hogwarts",
    type_category: "Women",
    loan_description: "Hermoine needs to fundraise so she can start a free-house elf coalition",
    total_amount: 1500,
    loan_length: 6,
    deadline: "2020-12-01"
)


Loan.create(
    loan_name: "agriculture_example",
    location: "agriculture_example",
    type_category: "Agriculture",
    loan_description: "agriculture_example",
    total_amount: 1500,
    loan_length: 6,
    deadline: "2020-12-01"
)
Loan.create(
    loan_name: "education_example",
    location: "education_example",
    type_category: "Education",
    loan_description: "education_example",
    total_amount: 1500,
    loan_length: 6,
    deadline: "2020-12-01"
)
Loan.create(
    loan_name: "refugees_example",
    location: "refugees_example",
    type_category: "Refugees",
    loan_description: "refugees_example",
    total_amount: 1500,
    loan_length: 6,
    deadline: "2020-12-01"
)
Loan.create(
    loan_name: "eco_example",
    location: "eco_example",
    type_category: "Eco-friendly",
    loan_description: "eco_example",
    total_amount: 1500,
    loan_length: 6,
    deadline: "2020-12-01"
)
Loan.create(
    loan_name: "domestic_example",
    location: "domestic_example",
    type_category: "Domestic",
    loan_description: "domestic_example",
    total_amount: 1500,
    loan_length: 6,
    deadline: "2020-12-01"
)
Loan.create(
    loan_name: "livestock_example",
    location: "livestock_example",
    type_category: "Livestock",
    loan_description: "livestock_example",
    total_amount: 1500,
    loan_length: 6,
    deadline: "2020-12-01"
)
Loan.create(
    loan_name: "art_example",
    location: "art_example",
    type_category: "Arts",
    loan_description: "art_example",
    total_amount: 1500,
    loan_length: 6,
    deadline: "2020-12-01"
)
            