json.extract! lending_transaction, :id, :loan_id, :user_id

json.lenders do
    @loan.lending_transactions.each do |transaction|
        json.set! transaction.id do
            json.partial! 'api/lenders/show', lender: transaction
        end
    end
end

json.users do
    @user.lenders.each do |lender|
        json.set! lender.id do 
            json.partial! 'api/users/show', user: lender
        end
    end
end