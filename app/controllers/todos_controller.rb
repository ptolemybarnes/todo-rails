require 'json'
require 'securerandom'

class TodosController < ActionController::Base
  TODOS = {
    "12321": {
      description: 'feed cat',
      isDone: true,
      id: "12321"
    },
    "5325423": {
      description: 'bury treasure',
      isDone: false,
      id: "5325423"
    }
  }

  def index
    puts TODOS
    render json: TODOS
  end

  def create
    stuff = JSON.parse(request.body.read)
    new_todo = {
      id: SecureRandom.hex,
      isDone: false
    }.merge(stuff)

    TODOS[new_todo[:id]] = new_todo

    render json: {}
  end
end
