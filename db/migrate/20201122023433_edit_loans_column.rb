class EditLoansColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :loans, :loan_photo, :string, default: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.geeksraisinggeeks.com%2Fwp-content%2Fuploads%2F2013%2F09%2FHermione-Granger.jpg&f=1&nofb=1"
  end
end
