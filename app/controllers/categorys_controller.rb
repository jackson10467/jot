class CategorysController < ApplicationController 
  before_action :authorize_request

  def index
    @user = User.find(params[:user_id])
    @categories = Category.where(user_id: @current_user.id)
    render json: @categories, include: :user, status: :ok
  end
  
  def show
    @user = User.find(params[:user_id])
    @categories = Category.where(user_id: @current_user.id)
    @category = @categories.find(params[:id])
    render json: @category, include: :user, status: :ok
  end
  
  def create
    @category = Category.create(category_params)
    render json: @category, status: :ok
  end
  
  def update
    @user = User.find(params[:user_id])
    @categories = Category.where(user_id: @current_user.id)
    @category = @categories.find(params[:id])
    
    if @category.update(category_params)
      render json: @category
    else 
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(@current_user.id)
    @categories = Category.where(user_id: @current_user.id)
    @category = @categories.find(params[:id])
    @category.destroy
  end
  
  private
  
  def category_params
    @user = User.find(params[:user_id])
    params.require(:category).permit(:name).merge(:user_id => @current_user.id)
  end
end
