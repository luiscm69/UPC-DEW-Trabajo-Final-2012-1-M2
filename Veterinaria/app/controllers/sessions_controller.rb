class SessionsController < ApplicationController
	def new
		@session = Session.new
	end

	def create
		@session = Session.new(params[:session])
		if @session.valid?
		 @user = User.login(@session.name, @session.password)
		 if @user
			session[:user_id] = @user.id
			session[:user_name] = @user.name
			session[:user_display] = @user.display_name
			redirect_to session[:requested_uri] || root_path
		 else
			redirect_to new_sessions_path, :notice => "Error de acceso"
		 end
	 else
		render :new
	 end
    end 	
	
	def destroy
		
		session[:user_id] = nil
		session[:user_name] = nil
		session[:user_display] = nil
		
		redirect_to new_session_path
		
	end
end
