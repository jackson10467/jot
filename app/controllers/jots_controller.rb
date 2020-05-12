class JotsController < ApplicationController 
  before_action :authorize_request

  def index
    @user = User.find(params[:user_id])
    @categories = Category.where(user_id: params[:user_id])
    @category = @categories.find(params[:category_id])
    @jots = Jot.where(category_id: @category.id)
    render json: @jots, :include => {:category => {:include => :user} },  status: :ok
  end
  
  def show
    @user = User.find(params[:user_id])
    @categories = Category.where(user_id: @current_user.id)
    @category = @categories.find(params[:id])
    @jot = Jot.find(params[:id])
    render json: @jot, :include => {:category => {:include => :user} },  status: :ok
  end
  
  def create
    @jot = Jot.create(jot_params)
    render json: @jot, status: :ok
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


    @user = User.find(params[:user_id])
    @category = Category.find(params[:category_id])
    @jot = Jot.find(params[:id])
    
    if @jot.update(jot_params)
      render json: @jot
    else 
      render json: @jot.errors, status: :unprocessable_entity
    end

  end

  def destroy
    @jot = Jot.find(params[:id])
    @jot.destroy
  end
  
  private
  
  def jot_params
    @user = User.find(params[:user_id])
    params.require(:jot).permit(:title,:note).merge(:category_id => params[:category_id])
  end
end
