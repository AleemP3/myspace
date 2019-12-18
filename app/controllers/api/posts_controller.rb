class Api::PostsController < ApplicationController

  def index
    render json: current_user.posts 
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save 
      render json: post
    else 
      render json: post.errors 
    end 
  end
  
  def update
    if current_user.posts.update(post_params)
      render json: post
    else 
      render json: post.errors 
    end 
  end

  def destroy

  end 

  private 

  def post_params 
    params.require(:post).permit(:title, :status, :body)
  end

end
