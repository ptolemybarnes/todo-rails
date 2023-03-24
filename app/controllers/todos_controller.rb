require 'json'

class TodosController < ActionController::Base
  TODOS = [
    Todo.new(description: 'feed cat'),
    Todo.new(description: 'bury treasure')
  ].reduce({}) do |collection, todo|
    collection.merge({ todo.uuid => todo})
  end

  def index
    render json: TODOS.to_json
  end

  def create
    parameters = JSON.parse(request.body.read)
    new_todo = Todo.new(
      description: parameters.fetch("description"),
      uuid: parameters.fetch("uuid"),
      isDone: parameters.fetch("isDone")
    )

    TODOS[new_todo.uuid] = new_todo

    head :no_content
  end
end
