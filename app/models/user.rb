# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :liked_friends, Array

  
  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id IN (?)", ids)
  end

  has_many :posts 
end
