class RandomController < ApplicationController
    def generate
      render json: { random: rand(1..100) }
    end
  end
  