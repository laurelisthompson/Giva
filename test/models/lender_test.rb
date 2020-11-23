# == Schema Information
#
# Table name: lenders
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  loan_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class LenderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
