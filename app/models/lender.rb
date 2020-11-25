# == Schema Information
#
# Table name: lenders
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  loan_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  loan_amount :integer          not null
#
class Lender < ApplicationRecord
    validates :user_id, :loan_id, :loan_amount, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :loan,
        foreign_key: :loan_id,
        class_name: :Loan
end
