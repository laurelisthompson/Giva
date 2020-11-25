class Api::LendersController < ApplicationController

    def create
        @lending_transaction = Lender.new(lenders_params)
        if @lending_transaction.save
            render "api/lenders/show"
        else
            render json: @lending_transaction.errors.full_messages, status: 422
        end
    end

    private
    def lenders_params
        params.require(:lending_transaction).permit(:user_id, :loan_id, :loan_amount)
    end
end