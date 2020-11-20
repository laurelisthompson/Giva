class Loan < ApplicationRecord
    CATEGORIES = %w(Women Agriculture Education Refugees Eco-friendly Domestic Livestock Arts).freeze

    validates :loan_name, :location, :loan_description, :deadline, presence: true
    validates :type_category, presence: true, inclusion: CATEGORIES

    #has_many lenders

    #has_many contributing_users
        #through lenders
        #source users

end