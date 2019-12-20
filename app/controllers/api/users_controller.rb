class Api::UsersController < ApplicationController

  before_action :authenticate_user!

  def index
    render json: User.all 
  end

  def update
    current_user.liked_friends << params[:id].to_i
    current_user.save 
  end
  
  def my_friends
    render json: User.liked(current_user.liked_friends)
    # binding.pry 
  end

  def my_friends_remove
    current_user.liked_friends.delete(params[:id].to_i)
    current_user.save 
  end 
end
