class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :need_login, unless: -> {
	controller_name == 'sessions'
  }
  protected
  def need_login
	unless already_logged_in?
		session[:requested_uri] = request.url
		redirect_to new_sessions_path 	
    end
  end
  def already_logged_in?
	!session[:user_id].nil?
  end 	
end
