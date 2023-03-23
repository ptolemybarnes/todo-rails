require 'json'
require 'pry'

class TodosController < ActionController::Base
  TODOS = [
    Todo.new('feed cat'),
    Todo.new('bury treasure')
  ].reduce({}) do |collection, todo|
    collection.merge({ todo.uuid => todo})
  end

  def index
    render json: TODOS.to_json
  end

  def create
    parameters = JSON.parse(request.body.read)
    new_todo = Todo.new(parameters.fetch("description"))

    TODOS[new_todo.uuid] = new_todo

    render json: {}
  end
end
