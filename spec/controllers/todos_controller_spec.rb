require 'rails_helper'
require 'json'

describe TodosController, type: :request do
  it "fetches all todos" do
    get '/todos'

    todos = JSON.parse(response.body)
    expect(response).to be_ok

    expect(todos).to eq({
      "12321" => {
        "description" => "feed cat",
        "id" => "12321",
        "isDone"=> true
      },
      "5325423" => {
        "description" => "bury treasure",
        "id" => "5325423",
        "isDone" => false
      }
    })
  end

  it "creates a todo, which is persisted" do
    new_todo = { description: 'new todo' }
    post '/todos', params: new_todo.to_json, headers: { 'CONTENT_TYPE' => 'application/json' }

    get '/todos'

    todos = JSON.parse(response.body)
    created_todo = todos.values.find {|todo| new_todo[:description] == todo["description"] }

    expect(created_todo).to be_present
  end
end
