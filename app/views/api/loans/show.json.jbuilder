json.loan do
    json.partial! 'api/loans/loan', loan: @loan 
end

json.lenders do
    @loan.lending_transactions.each do |transaction|
        json.set! transaction.id do
            json.partial! 'api/lenders/show', lender: transaction
        end
    end
end

#users