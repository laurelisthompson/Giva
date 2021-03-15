class Api::LendersController < ApplicationController

    def index
        @lending_transactions = Lender.where(user_id: current_user.id).includes(:loan)
        render :index
    end

    def show
        @lending_transaction = Lender.find(params[:id])
        render :show
    end

    def create
        @loan = Loan.find(params[:lending_transaction][:loan_id])
        @user = current_user

        @lending_transaction = Lender.new(user_id: @user.id, loan_id: @loan.id)

        if @lending_transaction.save
            render: show
        else
            render json: @lending_transaction.errors.full_messages, status: 422
        end
    end

    private
    def lenders_params
        params.require(:lending_transaction).permit(:user_id, :loan_id, :loan_amount)
    end
end