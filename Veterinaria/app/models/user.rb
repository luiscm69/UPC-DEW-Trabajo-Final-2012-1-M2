class User < ActiveRecord::Base
	has_secure_password
	def self.login (user_name, password)
		find_by_name(user_name).try(:authenticate,password)
	end	
end
