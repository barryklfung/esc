class Api::LadderUsersController < ApplicationController
  def index
    render json: {
    ladder_users: Ladder.all.order(points: :desc)
    }
  end

  def create
    p = ActionController::Parameters.new params[:ladder_user]
    permitted = p.permit(:name, :username, :email, :password, :password_confirmation)
    user = LadderUser.new permitted
    LadderMailer.signup_email(user).deliver!
	unless user.valid?
      render json: { errors: user.errors }, status: 400 and return
    end
    user.save!
    render json: { ladder_user: user }
  end
  
  def retrieve
	#TO-DO P3 (barryklfung) - make specialized 
  end
end
