json.loan do
    json.partial! 'api/loans/loan', loan: @loan 
end