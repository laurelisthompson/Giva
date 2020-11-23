# == Schema Information
#
# Table name: loans
#
#  id               :bigint           not null, primary key
#  loan_name        :string           not null
#  location         :string           not null
#  type_category    :string           not null
#  loan_description :string           not null
#  total_amount     :integer          not null
#  loan_length      :integer          not null
#  deadline         :date             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  loan_photo       :string           default("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.geeksraisinggeeks.com%2Fwp-content%2Fuploads%2F2013%2F09%2FHermione-Granger.jpg&f=1&nofb=1"), not null
#
class Loan < ApplicationRecord
    CATEGORIES = %w(Women Agriculture Education Refugees Eco-friendly Domestic Livestock Arts).freeze

    validates :loan_name, :location, :loan_description, :deadline, presence: true
    validates :type_category, presence: true, inclusion: CATEGORIES

    has_many :lending_transactions,
        foreign_key: :loan_id,
        class_name: :Lender

    has_many :lenders,
        through: :lending_transactions,
        source: :user

    has_one_attached :loan_photo

end
