json.key_format! camelize: :lower
@lending_transactions.each do |lending_transaction|
    json.set! lending_transaction.id do
        json.partial! "api/lenders/lender", lending_transaction: lending_transaction
    end
end