@loans.each do |loan|
    json.set! loan.id do
        json.partial! 'api/loans/loan', loan: loan
    end
end
