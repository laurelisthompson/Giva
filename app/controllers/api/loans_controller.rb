class Api::LoansController < ApplicationController

    def index
        @loans = Loan.all
        render :index
    end

    def show
        @loan = Loan.find(params[:id])
        render :show
    end

    private
    def loan_params
        params.require(:loan).permit(
            :loan_name, 
            :location,
            :type_category,
            :loan_description,
            :total_amount,
            :loan_length,
            :deadline,
            :loan_photo
        )
    end

end